let readlineSync = require("readline-sync");

console.log("Pick a number:");
let n = readlineSync.question("> ");



for (let i = 1; i <= n; i++) {

    let counter = 0;
    let total = counter * counter;
    counter = + i;
    console.log(counter + "+", total);
}