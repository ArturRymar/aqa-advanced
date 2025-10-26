let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let returnArrayEvenNumbers = (array) => {
    return array.filter((number) => number % 2 === 0);
};

let filteredByEven = returnArrayEvenNumbers(initialArray);

console.log(initialArray);
console.log(filteredByEven);