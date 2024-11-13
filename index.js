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
// operator functions
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

let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';
let isFirstValue = true;

const operate = function (firstValue,operator,secondValue) {
    if (operator == '+') {
        result = add(firstValue, secondValue);
        return result;
    }
    else if (operator == '-') {
        result = subtract(firstValue, secondValue) ;
        return result;

    }
    else if (operator == '*') {
        result = multiply(firstValue, secondValue) ;
        return result;

    }
    else if (operator == '/') {
        result = divide(firstValue, secondValue) ;
        return result;

    };
};

function numberAssign(valueProvided) {
    if(isFirstValue) {
        firstValue += valueProvided;
        display.textContent = firstValue;
    }
    else {
        secondValue += valueProvided;
        display.textContent = `${firstValue}${operator}${secondValue}`;
    }
};

numOneBtn.addEventListener("click", () => numberAssign("1"));
numTwoBtn.addEventListener("click", () => numberAssign("2"));
numThreeBtn.addEventListener("click", () => numberAssign("3"));
numFourBtn.addEventListener("click", () => numberAssign("4"));
numFiveBtn.addEventListener("click", () => numberAssign("5"));
numSixBtn.addEventListener("click", () => numberAssign("6"));
numSevenBtn.addEventListener("click", () => numberAssign("7"));
numEightBtn.addEventListener("click", () => numberAssign("8"));
numNineBtn.addEventListener("click", () => numberAssign("9"));
numZeroBtn.addEventListener("click", () => numberAssign("0"));

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
            display.textContent = `${firstValue}${operator}${secondValue}`;
        }
    }
});

addBtn.addEventListener("click", () => {
    if(isFirstValue) {
        if(!operator.includes("+")) {
            operator = "+";
            display.textContent = `${firstValue}${operator}`;
            isFirstValue = false;
        }  
    }
})
subtractBtn.addEventListener("click", () => {
    if(isFirstValue) {
        if(!operator.includes("-")) {
            operator = "-";
            display.textContent = `${firstValue}${operator}`;
            isFirstValue = false;
        }  
    }
})
multiplyBtn.addEventListener("click", () => {
    if(isFirstValue) {
        if(!operator.includes("*")) {
            operator = "*";
            display.textContent = `${firstValue}${operator}`;
            isFirstValue = false;
        }  
    }
})
divideBtn.addEventListener("click", () => {
    if(isFirstValue) {
        if(!operator.includes("/")) {
            operator = "/";
            display.textContent = `${firstValue}${operator}`;
            isFirstValue = false;
        }  
    }
})

equalBtn.addEventListener("click", () => {
    operate(parseFloat(firstValue),operator,parseFloat(secondValue));
    display.textContent = `${firstValue}${operator}${secondValue}=${result} `;
});

allClearBtn.addEventListener("click", () => {
    display.textContent = '';
    firstValue = '';
    operator = '';
    secondValue = '';
    result = '';
    isFirstValue = true;
})
