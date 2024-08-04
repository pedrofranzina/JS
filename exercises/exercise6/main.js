let readlineSync = require("readline-sync")

console.log("Pick a number: ")
let pick = readlineSync.question("> ");

console.log("Would you like to sum or product the value? ")
let reply = readlineSync.question("> ");


let box = 0;
let result = 0;

while (reply !== "sum" && reply !== "product") {
    console.log("you have to choose between 'sum' and 'product'");
    reply = readlineSync.question("try again> ");

    if (reply == "sum") {
        for (let i = 1; i <= pick; i++) {
            console.log(i, "+")
            box += i;
        }
        console.log("=", box)
    } if (reply == "product") {
        for (let i = 1; i <= pick; i++) {
            console.log(i, "x");
            result = i * box;
            box += i;
        }
        console.log(result);
    }
}