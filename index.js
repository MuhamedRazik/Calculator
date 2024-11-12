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
let firstValue = '';
let operator = '';
let secondValue = '';
let isFirstValue = true;

// console.log(operate(firstValue,operator,secondValue));

numOneBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "1";
        display.textContent = firstValue;
    }
    else {
        secondValue += "1";
        display.textContent = secondValue;
    }
});
numTwoBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "2";
        display.textContent = firstValue;
    }
    else {
        secondValue += "2";
        display.textContent = secondValue;
    }
});
numThreeBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "3";
        display.textContent = firstValue;
    }
    else {
        secondValue += "3";
        display.textContent = secondValue;
    }
});
numFourBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "4";
        display.textContent = firstValue;
    }
    else {
        secondValue += "4";
        display.textContent = secondValue;
    }
});
numFiveBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "5";
        display.textContent = firstValue;
    }
    else {
        secondValue += "5";
        display.textContent = secondValue;
    }
});
numSixBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "6";
        display.textContent = firstValue;
    }
    else {
        secondValue += "6";
        display.textContent = secondValue;
    }
});
numSevenBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "7";
        display.textContent = firstValue;
    }
    else {
        secondValue += "7";
        display.textContent = secondValue;
    }
});
numEightBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "8";
        display.textContent = firstValue;
    }
    else {
        secondValue += "8";
        display.textContent = secondValue;
    }
});
numNineBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "9";
        display.textContent = firstValue;
    }
    else {
        secondValue += "9";
        display.textContent = secondValue;
    }
});
numZeroBtn.addEventListener("click", () => {
    if(isFirstValue) {
        firstValue += "0";
        display.textContent = firstValue;
    }
    else {
        secondValue += "0";
        display.textContent = secondValue;
    }
});
dotBtn.addEventListener("click", () => {
    if(isFirstValue) {
        if(!firstValue.includes(".")) {
            firstValue += ".";
            display.textContent = firstValue;
        }
        
    }
    else {
        if(!secondValue.includes(".")) {
            secondValue += ".";
        display.textContent = secondValue;
        }
    }
});
equalBtn.addEventListener("click", () => {

});
