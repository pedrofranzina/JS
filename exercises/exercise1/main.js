let readlineSync = require("readline-sync")

// function greeting(firstname, lastname) {

//     console.log("Please enter your first name:")
//     let username = readlineSync.question("> ");

//     console.log("Please enter your last name:")
//     let lastName = readlineSync.question("> ");

//     console.log("Hello " + username + " " + lastName + ", welcome to the Learn to Code course.")

// }

// greeting()


const numbers = [2, 5, 7, 1, 50, 12, 34, 4, 1, -6, 7];

function itExists(needle, haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            return true;
        }
    }
    return false;
}

console.log("Escolha um numero:")
let number = readlineSync.question("> ");


if (itExists(number, numbers)) {
    console.log("EXISTE!");
} else {
    console.log("NAO EXISTE");
}