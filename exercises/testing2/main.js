const people = [
    {
        name: "Joe",
        height: 180
    },
    {
        name: "Joe",
        height: 170
    },
    {
        name: "Max",
        height: 165
    }
];

let sum = 0;

for (let i = 0; i < people.length; i++) {
    sum += people[i].height;
}

let average = sum / people.length;
console.log("a média da altura das " + people.length + " pessoas é " + average.toFixed(2));

