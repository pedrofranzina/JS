const dogsArray = ['../img/borderCollie.jpg', '../img/caoDeAgua.jpg', '../img/pastorAlemao.jpg', '../img/pastorAustraliano.jpg', '../img/rotweiller.jpg'];

const currentImage = document.getElementById("current-image");
const random = document.getElementById("random");

let counter = 0;

currentImage.src = dogsArray[counter];

function updateImage(index) {
    currentImage.src = dogsArray[index];
}

random.addEventListener("click", function () {
    let randomly = parseInt(Math.random() * dogsArray.length);
    updateImage(randomly);
})