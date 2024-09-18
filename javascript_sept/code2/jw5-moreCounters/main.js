const squareBox = document.getElementById("squareBox");
const buttonDown = document.getElementById("buttonDown");
const buttonUp = document.getElementById("buttonUp");

const squareBoxBlue = document.getElementById("squareBoxBlue");
const buttonDownBlue = document.getElementById("buttonDownBlue");
const buttonUpBlue = document.getElementById("buttonUpBlue");

let counter = 0;
let counterBlue = 0;

buttonDown.addEventListener("click", function () {
    if (counter < 1) {
        counter = 10;
    } else {
        counter -= 1;
    }
    squareBox.textContent = counter;
});

buttonUp.addEventListener("click", function () {
    if (counter == 10) {
        counter = 0;
    } else {
        counter += 1;
    }
    squareBox.textContent = counter;
});

buttonDownBlue.disabled = true;

buttonDownBlue.addEventListener("click", function () {
    counterBlue -= 1;
    if (counterBlue < 1) {
        buttonDownBlue.disabled = true;
    } else {

        buttonUpBlue.disabled = false;
    }
    squareBoxBlue.textContent = counterBlue;
})
buttonUpBlue.addEventListener("click", function () {
    counterBlue += 1;
    if (counterBlue > 9) {
        buttonUpBlue.disabled = true;
    } else {
        buttonDownBlue.disabled = false;
    }
    squareBoxBlue.textContent = counterBlue;
})

// Criar um contador que sobe ou desce em incrementos de 1
// 1 - O contador deve ser ciclico, quando chega ao 10 se o utilizador carregar no UP volta para 0
//     se estiver em 0 e carregar DOWN vai para o 10

// 2 - Fazer outro contador em que so vai de 0 a 10 na mesma, mas para quando chega ao 10 ou ao 0 a descer
//    Bonus Points: desactivar os botoes quando nao podem ser utilizados