let checkOrder = (available, ordered) => {
    let orderStatus;
    if (available < ordered) {
        orderStatus = "Your order is too large, we don’t have enough goods.";
    } else if (ordered == 0) {
        orderStatus = "Your order is empty.";
    } else {
        orderStatus = "Your order is accepted.";
    }
    return orderStatus;
};
console.log(checkOrder(9, 10));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, 10));