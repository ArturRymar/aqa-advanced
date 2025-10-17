function declarationSquare(width, height) {
    return width * height;
}
console.log(declarationSquare(5, 10))


const expressionSquare = function (width, height) {
    return width * height;
}
console.log(expressionSquare(5, 10))


const arrowSquare = (width, height) => width * height;
console.log(arrowSquare(5, 10));