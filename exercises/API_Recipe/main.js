const recipeInfo = document.querySelector("#recipeInfo");
const detailedData = document.querySelector("#detailedData");

let recipeData = [];

function displayRecipeDetails(index) {
    detailedData.innerHTML = `<img src="${recipeData.recipes[index].image}" alt="${recipeData.recipes[index].name} image"></img>`;
    detailedData.innerHTML += `<p>Cuisine: ${recipeData.recipes[index].cuisine}</p>`;
    detailedData.innerHTML += `<p>Rating: ${recipeData.recipes[index].rating}</p>`;
    detailedData.innerHTML += `<p>Meal Type: ${recipeData.recipes[index].mealType}</p>`;
    detailedData.innerHTML += `<p>${recipeData.recipes[index].ingredients.join(" ")} </p>`;
}

recipeInfo.addEventListener("click", function (event) {
    if (event.target.tagName !== "LI") {
        return;
    }
    const i = event.target.dataset.index;
    displayRecipeDetails(i);

});

async function getRecipes() {
    const url = "https://dummyjson.com/recipes";

    const response = await fetch(url);
    const result = await response.json();

    recipeData = result;
    recipeInfo.innerHTML = "";

    for (let i = 0; i < result.recipes.length; i++) {
        recipeInfo.innerHTML += `<li data-index="${i}">${result.recipes[i].name}</li>`;
    }

    if (result.recipes.length > 0) {
        displayRecipeDetails(0); // Display first recipe by default
    }

}

getRecipes();



