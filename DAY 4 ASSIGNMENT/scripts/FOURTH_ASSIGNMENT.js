console.log("THIS IS FOURTH QUESTION !!")

let choice = +prompt(`
1.Addition
2.Subraction
3.Multiplication
4.Division
5.Square Root
6.Percentage`);
let operator = [`Addition`,`Subraction`,`Multiplication`,`Division`,`Square Root`,`Percentage`]
let num1 = +prompt(`Number 1`);
let num2 = +prompt(` Number 2`);
let result;
switch (choice) {
    case 1:{
        result=num1+num2;
        break;
    }
    case 2:{
        result=num1-num2;
        break;
    }
    case 3:{
        result=num1*num2;
        break;
    }
    case 4:{
        result=num1/num2;
        break;
    }
    case 5:{
        result=Math.sqrt(num1);
        break;
    }
    case 6:{
        result=(num1/num2)*100;
        break;
    }
    default:
        break;
}
console.log(`The result of ${operator[choice-1]} between ${num1} & ${num2} is ${result}`);