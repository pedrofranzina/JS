let readlineSync = require("readline-sync");

let euro = 0.918278;

console.log("add a value (USD) to be converted (EUR)");
let answer = readlineSync.question("> ");

let result = answer * euro;
console.log(result.toFixed(2));
