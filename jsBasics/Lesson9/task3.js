let car1 = {
    brand: "AUDI",
    model: "A7",
    year: 2024
};

let car2 = {
    brand: "BMW",
    model: "5",
    owner: 2025
};

let car3 = { ...car1, ...car2};
console.log(car3);