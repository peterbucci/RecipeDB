require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const formidable = require("formidable");

app.use(express.static("public"));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const { query, pool, insert } = require("./services/db");
const db = pool();

const { addRecipeToES } = require("./services/elastic_search");

app.get("/recipes/count", async (req, res, next) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    const [recipeCount] = await query(db, "recipeCount");
    res.send(recipeCount);
  } catch (err) {
    next(err);
  }
});

app.get("/recipes/:offset/:limit", async (req, res, next) => {
  try {
    const offset = req.params.offset;
    const limit = req.params.limit;
    res.set("Access-Control-Allow-Origin", "*");
    const recipes = await query(db, "recipeList", [limit, offset]);
    res.send(recipes);
  } catch (err) {
    next(err);
  }
});

app.get("/recipe/:recipeId", async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await query(db, "recipe", [recipeId]);
    const ingredients = await query(db, "recipeIngredients", [recipeId]);
    const steps = await query(db, "recipeSteps", [recipeId]);
    const images = await query(db, "recipeImages", [recipeId]);
    const notes = await query(db, "recipeNotes", [recipeId]);
    res.set("Access-Control-Allow-Origin", "*");
    res.send({
      ...recipe[0],
      ingredients,
      steps,
      images,
      notes,
    });
  } catch (err) {
    next(err);
  }
});

app.put("/recipe/", async (req, res, next) => {
  const form = formidable({
    uploadDir: __dirname + "/public/uploads/images", // don't forget the __dirname here
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    const { ingredients, steps, notes, ...restFields } = fields;
    const columns = Object.keys(restFields);
    const values = Object.values(restFields).map((val) => JSON.parse(val));
    const recipe = await insert(db, columns, values);
    if (files.image) {
      await insert(
        db,
        ["source", "user_id", "recipe_id", "featured"],
        [files.image.newFilename, fields.user_id, recipe.insertId, true],
        "RecipeImage"
      );
    }
    const [{ id, ...recipeData }] = await query(db, "recipe", [
      recipe.insertId,
    ]);
    await addRecipeToES(recipeData, id);
    res.send({ id });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
