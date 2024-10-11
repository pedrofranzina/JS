const numbers = [2, 5, 7, 8, 3, 1, 4, 9, 6];

const newNumbers = numbers.filter(value => value > 6);

console.log(newNumbers);

const orderedNumbers = numbers.sort((a, b) => a - b);
const orderedNewNumbers = newNumbers.sort((a, b) => a - b);
const withLocale = numbers.sort((a, b) => a.localeCompare(b));

console.log(orderedNewNumbers);
console.log(orderedNumbers);
console.log(withLocale);