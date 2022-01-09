class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  division(num1, num2) {
    return num1 / num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }
 
}

class Display {
  constructor(displayPreviousValue, displayCurrentValue) {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPreviousValue = displayPreviousValue;
    this.calculator = new Calculator();
    this.typeOperator = undefined;
    this.currentValue = '';
    this.previousValue = '';
    this.signs = {
      add: "+",
      division: "÷",
      multiply: "*",
      subtract: "-",
    }
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll() {
    this.currentValue = '';
    this.previousValue = '';
    this.typeOperator = undefined;
    this.printValues();
  }

  compute(type) {
    this.typeOperator !== "equal" && this.calculate();
    this.typeOperator = type;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = '';
    this.printValues();
  }

  addNumber(num) {
    if (num === '.' && this.currentValue.includes('.')) return
    this.currentValue = this.currentValue.toString() + num.toString();
    this.printValues();
  }

  printValues() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.typeOperator] || ''}`;
  }

  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if (isNaN(currentValue) || isNaN(previousValue)) return
     this.currentValue = this.calculator[this.typeOperator](previousValue, currentValue);
  }
}

const displayPreviousValue = document.getElementById("previous-value");
const displayCurrentValue = document.getElementById("current-value");
const buttonNumbers = document.querySelectorAll(".num");
const buttonOperators = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".delete");
const deleteAllButton = document.querySelector(".deleteAll");

const display = new Display(displayPreviousValue, displayCurrentValue);

buttonNumbers.forEach((button) => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonOperators.forEach((button) => {
  button.addEventListener("click", () => display.compute(button.value));
});

deleteButton.addEventListener("click", () => display.delete());

deleteAllButton.addEventListener("click", () => display.deleteAll());
