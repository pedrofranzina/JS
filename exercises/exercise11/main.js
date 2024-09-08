let numbers = [4, 7, 10, 12, 1, 8, 20, 16];
let sum = 0;
let average = 0;
let highest = 0;
let lowest = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    average = sum / numbers.length;

    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}

lowest = highest;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

console.log(numbers);
console.log("Some Math");
console.log("---------");
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
