export const getRecipeCount = async () => {
  try {
    let res = await fetch(`http://192.168.1.151:3000/recipes/count`, {
      method: "GET",
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export const getRecipeList = async (offset, limit) => {
  try {
    let res = await fetch(
      `http://192.168.1.151:3000/recipes/${offset}/${limit}`,
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
    let res = await fetch(`http://192.168.1.151:3000/recipe/${recipeId}`, {
      method: "GET",
    });
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  console.log(mime);
  return new Blob([u8arr], { type: mime });
}

const getExtension = (type) => {
  let extension;
  switch (type) {
    case "image/bmp":
      extension = "bmp";
      break;
    case "image/gif":
      extension = "gif";
      break;
    case "image/jpeg":
      extension = "jpeg";
      break;
    case "image/svg+xml":
      extension = "svg";
      break;
    case "image/tiff":
      extension = "tiff";
      break;
    default:
      extension = "png";
  }

  return extension;
};

export const addRecipe = async (body) => {
  try {
    const formData = new FormData();
    // Loop through the object
    for (let [key, val] of Object.entries(body)) {
      // append each item to the formData (converted to JSON strings)
      if (key === "image") {
        const blob = dataURLtoBlob(val);
        formData.append(key, blob, "newImage." + getExtension(blob.type));
      } else {
        formData.append(key, JSON.stringify(val));
      }
    }
    const res = await fetch(`http://192.168.1.151:3000/recipe/`, {
      method: "PUT",
      body: formData,
    });

    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
