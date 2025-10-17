//Task 4.1:
const PI = Math.PI;
let cicleRadius = 10;

let calcCircleSquare = () => {
    let circleSquare = PI * Math.pow(cicleRadius,2);
    return Number(circleSquare.toFixed(2));

};
console.log(calcCircleSquare());

//Task 4.2:
let oblongLength = 10.26;
let oblongWidth = 5.23;

let calcOblongSquare = () => {
    let oblongSquare = oblongLength * oblongWidth;
    return Number(oblongSquare.toFixed(2));
};
console.log(calcOblongSquare());

//Task 4.3:
let cylinderRadius = 10.26;
let cylinderheight = 5;

let calcCylinderVolume = () => {
    let cylinderVolume = PI * Math.pow(cylinderRadius,2) * cylinderheight;
    return Number(cylinderVolume.toFixed(2));

};
console.log(calcCylinderVolume());