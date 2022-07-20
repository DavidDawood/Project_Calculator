// current result is the current value which will be used for calculations
let currentResult = 0;
// holding value is what number will we use for the next calculation
let holdingValue = 0;

// checks if there is already a decimal in place
let isDecimal = false;

// due to the way it works, the first iteration of current result will be 0, and so any number first put in will be 0 -operator- inputted number
// and thats can be annoying to do one extra calculation for addition to get the value you want
let isFirst = true;

const operatorSymbol = document.getElementById("operator");
const resultDisplay = document.getElementById("resultDisplay");

function updateResultsText(number) {
    resultDisplay.innerHTML = number;
}

// remove isFirst as current result will no longer be just 0, and placing it here allows for chain operators, parse the strings as numbers and then
// do the neccessary operation based on what the current operator string is
function displayTotal() {
    // reason being for the bool statements here and not the bottom of this block code as the switch operator wont actually be used for the operator in use but the previous one, and so if no operator is selected at the time it will do nothing and return, thus skipping these booleans

    isFirst = false;
    isDecimal = false;
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

    // reset everything except for isFirst so we are able to loop the code again
    updateOperator("");
    updateResultsText(currentResult);

    holdingValue = 0;
}
function addToAddingAmount(digit) {
    // one way gate to make it a decimal
    if (digit == "." && isDecimal) return;
    if (digit == ".") isDecimal = true;

    // if it is the first operator, change it directly to it, if there is a decimal allow it to add more zeros, same with below but to the holding value instead
    if (isFirst) {
        if (currentResult == 0 && !isDecimal) currentResult = digit;
        else currentResult += digit;

        currentResult = currentResult.toString();
        updateResultsText(currentResult);
    } else {
        if (holdingValue == 0 && !isDecimal) holdingValue = digit;
        else holdingValue += digit;

        holdingValue = holdingValue.toString();
        updateResultsText(holdingValue);
    }
}

// changing the operators
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

// change every variable to as if the page was refreshed
function clearCalculation() {
    currentResult = 0;
    holdingValue = 0;
    isDecimal = false;
    isFirst = true;
    updateResultsText(0);
    updateOperator("");
}
