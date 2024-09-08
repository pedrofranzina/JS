
let names = ["Josie", "Catherin", "Bob", "Max", "Hannah", "Alex"];
let count = 0;
let result = "";

for (let i = 0; i < names.length; i++) {
    if (count < names[i].length) {
        result = names[i];
        count = names[i].length;
    }
}
console.log(result);

