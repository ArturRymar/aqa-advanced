let initialArray = [10, 20, 30, 40, 50];

let arrayElementsSum = (array) => {
    return array.reduce((accumulator, currentValue) => { return accumulator + currentValue }
        , 0);
}
console.log(arrayElementsSum(initialArray));