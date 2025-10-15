let avarageGrade = Math.round(Math.random()*100);

let showExamResult = () => {
    let examResult;
    switch (true) {
        case avarageGrade>=60 && avarageGrade<=70: 
            examResult="Задовільно";
            break;
        case avarageGrade>=71 && avarageGrade<=80: 
            examResult="Добре";
            break;
        case avarageGrade>=81 && avarageGrade<=90: 
            examResult="Дуже добре";
            break;
        case avarageGrade>=91 && avarageGrade<=100: 
            examResult="Відмінно";
            break;
        default:
            examResult="Незадовільно";
    }
    return `${avarageGrade}, твій результат - ${examResult}!`;
};

console.log(showExamResult());