let person = {
    firstName: "Artur",
    lastName: "Rymar",
    age: 30
}

person.email = "arymar@gmail.com";
delete person.age;

console.log(person);