let studentAge=18; 
let isStudentAdult; 

//add type&&value comparison
isStudentAdult = studentAge===18;
console.log(studentAge);
console.log(isStudentAdult);

//add value for isStudentAdult via cycle
if (studentAge===18) {
      isStudentAdult=true;  
    } else {
        isStudentAdult=false;
    };    
console.log(studentAge);
console.log(isStudentAdult);

//function for checking age
let checkIsAdult = (personAge) => {
    let checkAge;
    if (personAge===18) {
        checkAge = "Is adult!"
    } else {
        checkAge = "Is not adult!!!";
    }
    return checkAge;
}
console.log(checkIsAdult(18));