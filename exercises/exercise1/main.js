let readlineSync = require("readline-sync")

function greeting(firstname, lastname) {

    console.log("Please enter your first name:")
    let username = readlineSync.question("> ");

    console.log("Please enter your last name:")
    let lastName = readlineSync.question("> ");

    console.log("Hello " + username + " " + lastName + ", welcome to the Learn to Code course.")

}

greeting()