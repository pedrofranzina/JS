let readlineSync = require("readline-sync")

// console.log("Beachwalk Hotel")
// console.log("----WELCOME----")

// console.log("What's your name? ")
// let name = readlineSync.question("> ");
// console.log("Welcome to our hotel Mr.", name, ".");

// console.log("Let me just inform you that we have different prices per tipology and discounts for longer stays")
// console.log("Normal room: 90€")
// console.log("Deluxe room: 120€")
// console.log("Deluxe suite: 150€")
// console.log("About the discounts:")
// console.log("5 nights or more, 10%")
// console.log("10 nights or more, 15%")
// console.log("15 nights or more, 20%")
// console.log("Also, the breakfast costs 10€ per person.")

console.log("How many nights do you'd like to stay with us?");
let nights = readlineSync.question("> ");

console.log("Which tipology do you want?");
let tipology = readlineSync.question("> ");

console.log("Will you stay alone or will be a second guest? (alone/two)");
let extraGuest = readlineSync.question("> ");

if (extraGuest == "alone") {
    let rate = 90;
    let tipologyCost = 0;

    if (tipology == "Deluxe room") {
        rate = 120;
    } else if (tipology == "Deluxe suite") {
        rate = 150;
    }

    let totalStayWithoutDiscount = nights * rate;


    if (nights >= 15) {
        tipologyCost = totalStayWithoutDiscount * .80;
        console.log("After discount you'll pay €", tipologyCost);
    } else if (nights >= 10) {
        tipologyCost = totalStayWithoutDiscount * .85;
        console.log("After discount you'll pay €", tipologyCost);
    } else if (nights >= 5) {
        tipologyCost = totalStayWithoutDiscount * .90;
        console.log("After discount you'll pay €", tipologyCost);
    } else {
        tipologyCost = totalStayWithoutDiscount;
        console.log("You'll not getting a discount, total is €", tipologyCost)
    }

    let withBreakfast = 0;

    console.log("Do you want breakfast? (yes/no)");
    let breakfast = readlineSync.question("> ");

    if (breakfast == "yes") {
        withBreakfast = nights * 10;
        console.log("with breakfast, it will cost €", tipologyCost + withBreakfast);
    } else {
        console.log("without breakfast, it stays the same: €", tipologyCost)
    }
} else if (extraGuest == "two") {
    let rate = 100;
    let tipologyCost = 0;

    if (tipology == "Deluxe room") {
        rate = 130;
    } else if (tipology == "Deluxe suite") {
        rate = 160;
    }

    let totalStayWithoutDiscount = nights * rate;


    if (nights >= 15) {
        tipologyCost = totalStayWithoutDiscount * .80;
        console.log("After discount you'll pay €", tipologyCost);
    } else if (nights >= 10) {
        tipologyCost = totalStayWithoutDiscount * .85;
        console.log("After discount you'll pay €", tipologyCost);
    } else if (nights >= 5) {
        tipologyCost = totalStayWithoutDiscount * .90;
        console.log("After discount you'll pay €", tipologyCost);
    } else {
        tipologyCost = totalStayWithoutDiscount;
        console.log("You'll not getting a discount, total is €", tipologyCost)
    }

    let withBreakfast = 0;

    console.log("Do you want breakfast? (yes/no)");
    let breakfast = readlineSync.question("> ");

    if (breakfast == "yes") {
        withBreakfast = nights * 20;
        console.log("with breakfast, it will cost €", tipologyCost + withBreakfast);
    } else {
        console.log("without breakfast, it stays the same: €", tipologyCost)
    }
}