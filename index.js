let currentResult = 0;
let futureResult = 0;

let addingAmount = 0;
let isDecimal = false;

function updateResultsText(number) {
    const element = document.getElementById("resultDisplay");
    element.innerHTML = number;
}
function displayTotal() {
    updateOperator("");
    updateResultsText("");

    addingAmount = 0;
    futureResult = 0;
    isDecimal = false;
}
function addToAddingAmount(digit) {
    // one way gate to make it a decimal
    if (digit == "." && isDecimal) return;
    if (digit == ".") isDecimal = true;

    if (addingAmount == 0 && !isDecimal) {
        addingAmount = digit;
    } else {
        let stringTotal = addingAmount.toString();
        stringTotal += digit;
        addingAmount = stringTotal;
    }

    updateResultsText(addingAmount);
}

function addition() {
    updateOperator("+");
}
function subtract() {
    updateOperator("-");
}
function multiply() {
    updateOperator("*");
}
function divide() {
    updateOperator("/");
}

function updateOperator(operatorString) {
    const element = document.getElementById("operator");
    element.innerHTML = operatorString;
}
function clearCalculation() {
    currentResult = 0;
    futureResult = 0;
    addingAmount = 0;
    isDecimal = false;
    displayTotal();
}

// will only display result on equal sign usage
// all operators will display which one is selected on the left hand side

// have a global result value which can be cleared
