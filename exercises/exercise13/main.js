const dogsArray = ['img/borderCollie.jpg', 'img/caoDeAgua.jpg', 'img/pastorAlemao.jpg', 'img/pastorAustraliano.jpg', 'img/rotweiller.jpg'];

const currentImage = document.getElementById("current-image");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

let counter = 0;

currentImage.src = dogsArray[counter];

previous.disabled = true;

function updateImage(index) {
    currentImage.src = dogsArray[index];
}

function checkButtons() {
    next.disabled = (counter === dogsArray.length - 1);
    previous.disabled = (counter === 0);
}

next.addEventListener("click", () => {
    if (counter < dogsArray.length - 1) {
        counter++;
        updateImage(counter);
        checkButtons();
    }
});

previous.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        updateImage(counter);
        checkButtons();
    }
});

