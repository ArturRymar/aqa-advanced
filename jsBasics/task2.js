let firstStudent = "Artur";
let secondStudent= "Oleg";

let greetingConcat = "Hello " + firstStudent + " and" + " " + secondStudent + "!"; // used separate empty space and inside text
console.log(greetingConcat);

let greetingTemplate = `Hello ${firstStudent} and ${secondStudent}!`;
console.log(greetingTemplate);