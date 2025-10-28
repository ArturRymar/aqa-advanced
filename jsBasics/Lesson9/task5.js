// Завдання:
// 1) Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// 2) Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// 3) Зробіть деструктуризацію в циклі

// 1) Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
let users = [
    { name: "Artur", surname: "Rymar", age: 30, email: "arymar@gmail.com" },
    { name: "Oleg", surname: "Lymar" },
    { name: "Alina", surname: "Vita", age: 29 },
];

// 2) Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
for (const user of users) {
    console.log(user);
    // 3) Зробіть деструктуризацію в циклі
    let { name, surname, age = "Вік не вказано", email = "Пошту не вказано" } = user;
    console.log(name, surname, age, email);
}