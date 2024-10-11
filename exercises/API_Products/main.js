const productsNameList = document.querySelector("#productsNameList");

let productsList = [];

async function getProductsNames() {
    const url = "https://dummyjson.com/products?limit=0&skip=0&select=title,price,category,thumbnail"

    const response = await fetch(url);
    const result = await response.json();

    productsList = result;
    productsNameList.innerHTML = "";

    for (let i = 0; i < result.products.length; i++) {
        productsNameList.innerHTML += `<li>${result.products[i].title}</li>`
    }
}

getProductsNames()
