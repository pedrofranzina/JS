// function rectPerimeter(widht, height) {
//     const result = widht + widht + height + height;
//     console.log("o perimetro do retangulo é", result)
// }

// function rectArea(widht, height) {
//     const result = widht * height;
//     console.log("o area do retangulo é", result)
// }

// function circumference(radius) {
//     const result = 2 * Math.PI * radius;
//     console.log(result.toFixed(2))
// }

// function circleArea(radius) {
//     const result = math.PI * radius * radius;
//     // const result = math.PI * radius ** 2;
//     // const result = math.PI * math.pow(radius, 2);

//     console.log(result);
// }

// rectPerimeter(2, 4);
// rectArea(2, 4);
// circumference(10);
// circleArea(4);



let numeros = [2, 4, 6, 2, 43, 54, 55, 22, 21, 11, 9, 12]

for (let i = 0; i <= numeros.length; i++) {
    if (i % 2 == 0) {
        console.log(i + " : " + numeros[i]);
    }
}

console.log("----------")

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(i + " : " + numeros[i]);
    }
}