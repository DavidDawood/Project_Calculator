let currentResult = 0;

let holdingValue = 0;

let isDecimal = false;

const operatorSymbol = document.getElementById("operator");
const resultDisplay = document.getElementById("resultDisplay");

function updateResultsText(number) {
    resultDisplay.innerHTML = number;
}
function displayTotal() {
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

    if (currentResult == 0 && !isDecimal) {
        currentResult = digit;
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
    updateResultsText(0);
    updateOperator("");
}

// currentResult = currentResult + holdingValueOne;
// this way i can stack results
// make it so if i do * 5 off the bat, it will do 0 * 5, once you click equals it makes
// currentResult  = currentResult * 5

// dont touch currentResult, just keep modifying it, if its the start, like
// 5+5 , it will really be 0 5 + 5

// so if i want to add 5 + 5, it will be doing 0 + 5, as its current result + holdingValue
// so in this case, if value is 0, just add it straight to the current result then
