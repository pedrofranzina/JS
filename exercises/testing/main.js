function rectPerimeter(width, height) {
    return (width + height) * 2;
}

function rectArea(width, height) {
    return width * height;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function circleArea(radius) {
    const result = Math.PI * Math.pow(radius, 2);
    return result;
}

let x = rectPerimeter(3, 4);
let y = rectArea(3, 4);
let w = circumference(3);
let z = circleArea(3);



console.log(rectPerimeter(3, 4));
console.log(rectArea(3, 4));
console.log(circumference(3));
console.log(circleArea(3));

console.log("---------")

console.log(x);
console.log(y);
console.log(w);
console.log(z);