/*
function celsiusToFahrenheit(celsius){
    return celsius * (9/5)+32;
}

const freezingC =0;
const boilingC = 100;

const freezingFah = celsiusToFahrenheit(freezingC);
const boilingFah = celsiusToFahrenheit(boilingC);
//console.log(`The freezing point of water in Fahrenheit is ${freezingFah}`);
//console.log(`The boiling point of water in Fahrenheit is ${boilingFah}`);

const celsiusInput = process.argv[2];
console.log(celsiusInput);

*/
/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare =  squareArea(sideLength);

console.log(areaOfCircle);