let firstArray = [1, 2, 3];
let secondArray = ['four', 'five'];

let concatArrays = (initialArray, concatedArray) => {
    return initialArray.concat(concatedArray);
};

let concatenatedArray = concatArrays(firstArray, secondArray);
console.log(concatenatedArray);