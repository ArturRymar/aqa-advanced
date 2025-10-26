const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let numberCount = (array) => {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < array.length; i++) {
        switch (true) {
            case array[i] > 0: positiveCount++;
                break;
            case array[i] < 0: negativeCount++;
                break;
            case array[i] === 0: zeroCount++;
        }
    }
    return `
Кількість позитивних чисел: ${positiveCount}!
Кількість негативних чисел: ${negativeCount}!
Кількість нульових чисел: ${zeroCount}!`;
};

console.log(numberCount(numbers));