let reverseCounter1 = (num) => {
    console.log(num);
    num > 1 ? reverseCounter1(num - 1) : 1;
};

reverseCounter1(5);

function reverseCounter2(num) {
    for (; num > 0; num--) {
        console.log(num);
    }
}

reverseCounter2(5);