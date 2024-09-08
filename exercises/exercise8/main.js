
let numbers = [2, 5, 10, 11, 30, 18];
let n = 2;
let result = "The choosen number isn't in the list"

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == n) {
        result = "The choosen number is in the list"
    }
}
console.log(result);