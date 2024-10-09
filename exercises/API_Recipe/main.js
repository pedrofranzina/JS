const recipeInfo = document.querySelector("#recipeInfo");

let recipeData = [];

recipeInfo.addEventListener("click", function (event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    const i = event.target.dataset.index;

    detailedData.innerHTML = `<img src="${recipeData.recipes[i].image}" alt="${recipeData.recipes[i].name} image"></img>`;
    detailedData.innerHTML += `<p>Cuisine: ${recipeData.recipes[i].cuisine}</p>`;
    detailedData.innerHTML += `<p>Rating: ${recipeData.recipes[i].rating}</p>`;
    detailedData.innerHTML += `<p>Meal Type: ${recipeData.recipes[i].mealType}</p>`;
    detailedData.innerHTML += `<p>${recipeData.recipes[i].ingredients} </p>`;
});

async function getRecipes() {
    const url = "https://dummyjson.com/recipes";

    const response = await fetch(url);
    const result = await response.json();

    recipeData = result;
    recipeInfo.innerHTML = "";

    for (i = 0; i < result.recipes.length; i++) {
        recipeInfo.innerHTML += `<li data-index="${i}">${result.recipes[i].name}</li>`
    }
}

getRecipes();