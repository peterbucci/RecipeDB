const selectQueries = {
  recipeCount: `
      SELECT COUNT(*) AS 'count'
      FROM Recipe
  `,
  recipeList: `
      SELECT r.id AS 'id', r.name AS 'name', r.description AS 'description', r.created_on AS 'createdOn', u.first_name AS 'firstName', u.last_name AS 'lastName', ri.source AS 'source'
      FROM Recipe r
      JOIN User u on r.user_id = u.id
      LEFT OUTER JOIN RecipeImage ri on ri.featured AND ri.recipe_id = r.id
      LIMIT ?
      OFFSET ?;
    `,
  recipe: `
      SELECT r.id AS 'id', r.name AS 'name', r.description AS 'description', r.created_on AS 'createdOn', u.first_name AS 'firstName', u.last_name AS 'lastName'
      FROM Recipe r
      JOIN User u on r.user_id = u.id
      WHERE r.id = ?;`,
  recipeSteps: `
      SELECT rs.id AS 'id', rs.step AS 'step', rs.details AS 'details'
      FROM Recipe r
      JOIN RecipeStep rs on r.id = rs.recipe_id
      WHERE recipe_id = ?;`,
  recipeIngredients: `
        SELECT i.id AS 'id', ri.amount AS 'amount', mu.name AS 'unitOfMeasure', mu.plural AS 'unitOfMeasurePlural', mu.abbreviation AS 'unitOfMeasureAbbr', i.name AS 'name', i.plural AS 'plural' 
        FROM Recipe r 
        JOIN RecipeIngredient ri on r.id = ri.recipe_id 
        JOIN Ingredient i on i.id = ri.ingredient_id 
        LEFT OUTER JOIN Measure mu on mu.id = measure_id
        WHERE recipe_id = ?;`,
  recipeImages: `
        SELECT ri.id AS 'id', ri.source AS 'source', ri.description AS 'description', ri.user_id AS 'userId', ri.recipe_id AS 'recipeId', ri.step_id AS 'stepId', ri.featured AS "featured"
        FROM Recipe r 
        JOIN RecipeImage ri on r.id = ri.recipe_id 
        WHERE recipe_id = ?;`,
  recipeNotes: `
        SELECT rn.id AS 'id', rn.step AS 'step', rn.details AS 'details'
        FROM Recipe r 
        JOIN RecipeNote rn on r.id = rn.recipe_id 
        WHERE recipe_id = ?;`,
};

const mysql = require("mysql2");
const config = require("../config");

const pool = () => {
  return mysql.createPool(config);
};

const query = async (db, queryId, params) => {
  try {
    const [rows] = await db.promise().execute(selectQueries[queryId], params);
    return rows;
  } catch (err) {
    throw err;
  }
};

const insert = async (db, columns, values, table = "Recipe") => {
  const columnsStr = columns.slice(0, -1).join(", ") + ", " + columns.slice(-1);
  const valuesArr = Array(values.length).fill("?");
  const valuesStr =
    valuesArr.slice(0, -1).join(", ") + ", " + valuesArr.slice(-1);

  try {
    const [rows] = await db.promise().execute(
      `
    INSERT INTO ${table} (${columnsStr})
    VALUES
     (${valuesStr})
    `,
      values
    );
    return rows;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  pool,
  query,
  insert,
};
