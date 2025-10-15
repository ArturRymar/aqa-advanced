let avarageGrade = Math.round(Math.random()*100);

let showExamResult = () => {
    let examResult;
    if (avarageGrade>=60 && avarageGrade<=70) {
        examResult="Задовільно";
    } else if (avarageGrade>=71 && avarageGrade<=80) {
        examResult="Добре";
     } else if (avarageGrade>=81 && avarageGrade<=90) {
        examResult="Дуже добре";
        } else if (avarageGrade>=91 && avarageGrade<=100) {
            examResult="Відмінно";
            } 
    else {
     examResult="Незадовільно";
    }
    return `${avarageGrade}, твій результат - ${examResult}!`;
};

console.log(showExamResult());