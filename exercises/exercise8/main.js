
let numbers = [2, 5, 10, 11, 30, 18];
let n = 100;
let result = "The chosen number isn't in the list"

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == n) {
        result = "The chosen number is in the list"
    }
}
console.log(result);