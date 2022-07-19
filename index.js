let currentResult = 0;
let holdingValue = 0;

let isDecimal = false;
let isFirst = true;

const operatorSymbol = document.getElementById("operator");
const resultDisplay = document.getElementById("resultDisplay");

function updateResultsText(number) {
    resultDisplay.innerHTML = number;
}
function displayTotal() {
    isFirst = false;
    currentResult = parseFloat(currentResult);
    holdingValue = parseFloat(holdingValue);
    switch (operatorSymbol.innerHTML) {
        case "+":
            currentResult = currentResult + holdingValue;
            break;
        case "-":
            currentResult = currentResult - holdingValue;
            break;
        case "*":
            currentResult = currentResult * holdingValue;
            break;
        case "/":
            currentResult = currentResult / holdingValue;
            break;
        default:
            return;
    }

    updateOperator("");
    updateResultsText(currentResult);

    holdingValue = 0;
    isSecondHolder = false;
    isDecimal = false;
}
function addToAddingAmount(digit) {
    // one way gate to make it a decimal
    if (digit == "." && isDecimal) return;
    if (digit == ".") isDecimal = true;

    if (isFirst) {
        if (currentResult == 0) currentResult = digit;
        else currentResult += digit;

        currentResult = currentResult.toString();
        updateResultsText(currentResult);
    } else {
        if (holdingValue == 0) holdingValue = digit;
        else holdingValue += digit;

        holdingValue = holdingValue.toString();
        updateResultsText(holdingValue);
    }
}

function addition() {
    displayTotal();
    updateOperator("+");
}
function subtract() {
    displayTotal();
    updateOperator("-");
}
function multiply() {
    displayTotal();
    updateOperator("*");
}
function divide() {
    displayTotal();
    updateOperator("/");
}

function updateOperator(operatorString) {
    operatorSymbol.innerHTML = operatorString;
}
function clearCalculation() {
    currentResult = 0;
    holdingValue = 0;
    isDecimal = false;
    isFirst = true;
    updateResultsText(0);
    updateOperator("");
}
