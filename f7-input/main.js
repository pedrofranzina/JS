// npm instalL readline-sync
// npm i readline-sync



// let readlineSync = require("readline-sync");

// console.log("Como te chamas?")
// let userName = readlineSync.question("> ")
// console.log("Olá " + userName + "!")

// console.log(" ")

// console.log("que idade tens?")
// let age = readlineSync.question("> ")
// console.log("ah, tens " + age + ". eu sou muito mais velho!")


let readlineSync = require("readline-sync")

console.log("Que tabuada quer aprender")
let number = readlineSync.question("> ")
let counter = 0;
while (counter < 10) {
    counter++;
    let result = number * counter;

    console.log(number + " x " + counter + " = " + result)
}