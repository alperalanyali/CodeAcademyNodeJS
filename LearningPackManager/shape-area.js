/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
const circleArea = (radiusLength)=>{
  return PI*radiusLength*radiusLength;
}

const squareArea = (sideLength)=>{
 return sideLength * sideLength;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;