const add = function (value1, value2) {
    return value1 + value2;
};

const subtract = function (value1, value2) {
    return value1 - value2;
};

const multiply = function (value1, value2) {
    return value1 * value2;
};

const divide = function (value1, value2) {
    return value1 / value2;
};
// console.log(add(1,2));
// console.log(subtract(1,2));
// console.log(multiply(1,2));
// console.log(divide(1,2));

let firstValue = '';
let operator = '';
let secondValue = '';

const operate = function (firstValue,operator,secondValue) {
    if (operator == '+') {
        return add(firstValue, secondValue) ;
    }
    else if (operator == '-') {
        return subtract(firstValue, secondValue) ;
    }
    else if (operator == '*') {
        return multiply(firstValue, secondValue) ;
    }
    else if (operator == '/') {
        return divide(firstValue, secondValue) ;
    };
};
// console.log(operate(1,"*",2));
// console.log(operate(1,"+",2));
// console.log(operate(1,"-",2));
// console.log(operate(1,"/",2));
