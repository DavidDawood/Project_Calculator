# Project_Calculator

<<<<<<< HEAD

## Description

A project for a calculator, pretty basic, just a normal calculator

## Images

Preview:
![calculator](/images/calculator.png)
Referance:
![referanceIMG](/images/Referance.png)

## Inner Workings

# Upon clicking on a number, it will add it to the holding value property. Unless its the first value via (isFirst) boolean, it will instead add it straight to current Result, this is so you wouldnt be doing 0 _ (holding value) but rather (input value) _ (next input)

A project for a calculator

Upon clicking on a number, it will add it to the holding value property. Unless its the first value via (isFirst) boolean, it will instead add it straight to current Result, this is so you wouldnt be doing 0 _ (holding value) but rather (input value) _ (next input)

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

Upon clicking on either the Equal Sign or one of the operators, it will select an operator, and then via switch statement will do the neccessary calculation, in the case of the equal sign, if no operator is used, nothing will happen.
Once the switch statement has done the calculation, and the current result will be equal to the last current result , operator here , then the holding value, will then reset holding value, and any other decimal checks, which then will reset back to do the same operation again for next time. Allowing for chain operations rather than always clicking the equal sign after each operation

Upon clicking clear on the top, will reset all values, and also reset the isFirst property to allow the first input to be set directly to the currentResult property

# <<<<<<< HEAD

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```

let currentResult = 0;
let holdingValue = 0;

let isDecimal = false;
let isFirst = true;

const operatorSymbol = document.getElementById("operator");
const resultDisplay = document.getElementById("resultDisplay");
```

<<<<<<< HEAD
will simply add to the result

=======

will simply add to the result

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```

function updateResultsText(number) {

    resultDisplay.innerHTML = number;
}
```

<<<<<<< HEAD
will reset most things apart from isFirst, as to notify the addToAddingAmount function that from this point forward are to add to holding value and not current result
=======

will reset most things apart from isFirst, as to notify the addToAddingAmount function that from this point forward are to add to holding value and not current result

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```

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
```

<<<<<<< HEAD
will add the digit to either the current value or holding value depending on if its the first input of the session

=======

will add the digit to either the current value or holding value depending on if its the first input of the session

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```
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
```

<<<<<<< HEAD
all the operators below, will display the total before updating the operation, this is so you can chain the operations without being out of sync by one step as the
display total will do the calculation on a switch statement

=======

all the operators below, will display the total before updating the operation, this is so you can chain the operations without being out of sync by one step as the
display total will do the calculation on a switch statement

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```

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
```

update what the operator output shows
<<<<<<< HEAD

=======

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```

function updateOperator(operatorString) {

    operatorSymbol.innerHTML = operatorString;
}
```

Clear the whole application, including to changing the isFirst result to true as everything has been changed, as if you refreshed the page
<<<<<<< HEAD

=======

> > > > > > > 8b5c6c99b6a53697fb4dce6393148dc9f6900096

```

function clearCalculation() {

    currentResult = 0;
    holdingValue = 0;
    isDecimal = false;
    isFirst = true;
    updateResultsText(0);
    updateOperator("");
}
```
