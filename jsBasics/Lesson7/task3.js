function divideNumbers(numerator, denominator) {
    if (typeof (numerator) !== "number" || typeof (denominator) !== "number" || denominator === 0) {
        throw new Error();
    };
    return numerator / denominator;
};

try {
    let result = divideNumbers(4, 2);
    console.log(result);
}
catch (error) {
    console.error("No error - this is valid example", error.message);
};

try {
    let result = divideNumbers(4, 0);
    console.log(result);
}
catch (error) {
    console.error("Denominator can`t be 0!", error.message);
};

try {
    let result = divideNumbers("string", 2);
    console.log(result);
}
catch (error) {
    console.error("Numerator and denominator must be numbers!", error.message);
};

try {
    let result = divideNumbers(4, "string");
    console.log(result);
}
catch (error) {
    console.error("Numerator and denominator must be numbers!", error.message);
}
finally {
    console.log("Робота виконана!")
}

