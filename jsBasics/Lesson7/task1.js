function handleNum(num, isEven, isOdd) {
    num % 2 === 0 ? isEven() : isOdd();
};

function handleEven() {
    console.log("number is even");
};

function handleOdd() {
    console.log("number is odd");
};

handleNum(2, handleEven, handleOdd);
