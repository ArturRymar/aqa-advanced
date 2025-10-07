import chalk from "chalk";
// console.log(chalk.blue('hi'));

let sum = (a,b) => {  
  let first_action = a + b;
  let second_action = () => first_action*2;
  let final_result = second_action()+4;
  return final_result;
};

console.log(sum(1,2));