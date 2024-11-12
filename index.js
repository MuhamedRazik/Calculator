const allBtn = document.querySelectorAll('button');

const allClearBtn = document.getElementById('all-clear');
const clearBtn = document.getElementById('clear');

const numOneBtn = document.getElementById('num-1');
const numTwoBtn = document.getElementById('num-2');
const numThreeBtn = document.getElementById('num-3');
const numFourBtn = document.getElementById('num-4');
const numFiveBtn = document.getElementById('num-5');
const numSixBtn = document.getElementById('num-6');
const numSevenBtn = document.getElementById('num-7');
const numEightBtn = document.getElementById('num-8');
const numNineBtn = document.getElementById('num-9');
const numZeroBtn = document.getElementById('num-zero');
const dotBtn = document.getElementById('dot-symbol');

const equalBtn = document.getElementById('equal-btn');
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

const display = document.getElementById('cal-display');

// hover effect for all button
allBtn.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.color = "white";
        button.style.opacity = "0.5";

    })
    button.addEventListener("mouseout", () => {
        button.style.color = "black";
        button.style.opacity = "1";
    })
});


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
