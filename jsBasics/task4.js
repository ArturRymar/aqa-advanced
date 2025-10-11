//Task 4.1:
let PI = Math.PI;
let cicleRadius = 10;

let calcCircleSquare = () => {
    let circleSquare = PI * Math.pow(cicleRadius,2);
    return Math.round(( circleSquare + Number.EPSILON) * 100) / 100;

};
console.log(calcCircleSquare());

//Task 4.2:
let oblongLength = 10.26;
let oblongWidth = 5.23;

let calcOblongSquare = () => {
    let oblongSquare = oblongLength * oblongWidth;
    return Math.round(( oblongSquare + Number.EPSILON) * 100) / 100;
};
console.log(calcOblongSquare());

//Task 4.3:
let cylinderRadius = 10.26;
let cylinderheight = 5;

let calcCylinderVolume = () => {
    let cylinderVolume = PI * Math.pow(cylinderRadius,2) * cylinderheight;
    return Math.round(( cylinderVolume + Number.EPSILON) * 100) / 100;

};
console.log(calcCylinderVolume());