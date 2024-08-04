
let readlineSync = require("readline-sync")

console.log("Pick a number: ")
let pick = readlineSync.question("> ");

let box = 0;

for (let i = 1; i <= pick; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i, "+");
        box += i;
    }
}
console.log("=", box)