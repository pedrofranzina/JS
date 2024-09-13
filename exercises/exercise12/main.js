let readlineSync = require("readline-sync");

console.log("Could you let me know your name?");
let answer = readlineSync.question("> ");

function reverseName(name) {
    let reversedName = name.split("").reverse().join("");
    return reversedName;
}

console.log(reverseName(answer));


