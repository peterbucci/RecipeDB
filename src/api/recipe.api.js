export const getRecipeList = async (offset, limit) => {
  try {
    let res = await fetch(
      `http://192.168.1.165:3000/recipes/${offset}/${limit}`,
      {
        method: "GET",
      }
    );
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

export const getRecipe = async (recipeId) => {
  try {
    let res = await fetch(`http://192.168.1.165:3000/recipe/${recipeId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

export const addRecipe = async (body) => {
  try {
    let res = await fetch(`http://192.168.1.165:3000/recipe/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
