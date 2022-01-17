import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public readonly Math = Math;

  constructor(private log: LoggerService, private notify: NotificationService) {
    this.inicia();
  }
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
   
  };
  
  class Display {
    init: any;
    
    constructor(displayFunction) {
      this.displayFunction = displayFunction;
      this.calculator = new Calculator();
      this.typeOperator = undefined
      this.currentValue = '';
      this.previousValue = '';
      this.signs = {
        add: "+",
        division: "÷",
        multiply: "*",
        subtract: "-",
      }
    }
  
    delete(): void{
      this.currentValue = this.currentValue.toString().slice(0, -1);
      this.printValues();
    }
  
    deleteAll(): void {
      this.currentValue = '';
      this.previousValue = '';
      this.typeOperator = undefined;
      this.printValues();
    }
  
    compute(type) {
      this.typeOperator !== "equal" && this.calculate();
      this.typeOperator = type;
      this.currentValue && (this.previousValue = this.currentValue);
      this.currentValue = '';
      this.printValues();
    }
  
    addNumber(num) {
      if (num === '.' && this.currentValue.includes('.')) return
      this.currentValue = this.currentValue.toString() + num.toString();
      this.printValues();
    }
  
    printValues(): void{
      this.displayFunction(this.currentValue, `${this.previousValue} ${this.signs[this.typeOperator] || ''}`);
    }
  
    calculate(): void {
      const previousValue = parseFloat(this.previousValue);
      const currentValue = parseFloat(this.currentValue);
  
      if (isNaN(currentValue) || isNaN(previousValue)) return
      this.currentValue = this.calculator[this.typeOperator](previousValue, currentValue);
    }
    ngOnInit(): void {
      if (this.init) {
        this.compute(this.init);
      }
    }
  }