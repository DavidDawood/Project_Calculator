let currentResult = 0;
let addingAmount = 0;

export const displayTotal = () => {};
export const displayAddingAmount = () => {};

export const addition = () => {
    displayAddingAmount();
};
export const subtract = () => {
    displayAddingAmount();
};
export const multiply = () => {
    displayAddingAmount();
};
export const divide = () => {
    displayAddingAmount();
    updateOperator("/");
};

export const updateOperator = (operatorString) => {
    const element = document.getElementById("operator");
    element.innerHTML = operatorString;
};
export const clearCalculation = () => {
    currentResult = 0;
    displayTotal();
};

// will only display result on equal sign usage
// all operators will display which one is selected on the left hand side

// have a global result value which can be cleared
