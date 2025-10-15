//example with for

let multTableByNumberViaFor = (number) => {
   let tableRows=[];
   for (let i=1; i<=10; i++) {
   tableRows.push(`${number} x ${i} = ${number*i}`);
    }
    return tableRows.join('\n');
}

console.log(multTableByNumberViaFor(5));

//example with while
let multTableByNumberViaWhile = (number) => {
   let tableRows=[];
   let counter=1;
   while (counter<=10) {
   tableRows.push(`${number} x ${counter} = ${number*counter}`);
   counter++;
    }
    return tableRows.join('\n');
}

console.log(multTableByNumberViaWhile(5));