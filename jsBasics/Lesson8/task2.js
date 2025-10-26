//імперативний приклад
let initialArrray = [1, 2, 3, 4, 5];
let mutatedArrayImperative = initialArrray.map((number) => number * number);

console.log(initialArrray);
console.log(mutatedArrayImperative);

//декларативний приклад
let mutatedArrayDeclarative = (array) => array.map((number) => number * number);

console.log(mutatedArrayDeclarative(initialArrray));