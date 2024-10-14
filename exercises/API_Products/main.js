const productsCategoriesList = document.querySelector("#productsCategoriesList");
const detailedData = document.querySelector("#detailedData");
const priceAsc = document.querySelector("#priceAsc");
const priceDesc = document.querySelector("#priceDesc");

let categoriesList = [];
let productDetails = [];
let categories = "";

function addCategoriesIntoClick() {
    productsCategoriesList.addEventListener("click", async function (event) {
        if (event.target.tagName !== "LI") {
            return;
        }
        categories = event.target.textContent;
        await fetchProducts(categories);
    });
}

async function fetchCategories() {
    const urlForCategories = "https://dummyjson.com/products/category-list";

    const response = await fetch(urlForCategories);
    const result = await response.json();

    categoriesList = result;

    productsCategoriesList.innerHTML = "";
    for (let i = 0; i < categoriesList.length; i++) {
        productsCategoriesList.innerHTML += `<li>${categoriesList[i]}</li>`;
    }

    addCategoriesIntoClick();
}

async function fetchProducts(category) {
    const urlForProducts = `https://dummyjson.com/products/category/${category}`;

    const response = await fetch(urlForProducts);
    const result = await response.json();

    productDetails = result.products;

    detailedData.innerHTML = "";
    for (let j = 0; j < productDetails.length; j++) {
        detailedData.innerHTML += `<div>
        <p>${productDetails[j].title}</p>
        <p>${productDetails[j].price}</p>
        <img src="${productDetails[j].thumbnail}" alt="${productDetails[j].title}" />
        </div > `;
    }
}

fetchCategories();

priceAsc.addEventListener("click", function () {
    productDetails.sort((a, b) => a.price - b.price);

    detailedData.innerHTML = "";
    for (let i = 0; i < productDetails.length; i++) {
        detailedData.innerHTML += `<div>
        <p>${productDetails[i].title}</p>
        <p>${productDetails[i].price}</p>
        <img src="${productDetails[i].thumbnail}" alt="${productDetails[i].title}" />
        </div > `;
    }
});


priceDesc.addEventListener("click", function () {
    productDetails.sort((a, b) => b.price - a.price);

    detailedData.innerHTML = "";
    for (let i = 0; i < productDetails.length; i++) {
        detailedData.innerHTML += `<div>
        <p>${productDetails[i].title}</p>
        <p>${productDetails[i].price}</p>
        <img src="${productDetails[i].thumbnail}" alt="${productDetails[i].title}" />
        </div > `;
    }
});
