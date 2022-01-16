describe("Testing Calculadora.js", function () {
    describe("Testing the Calculator class", function () {
      let num1 = Math.floor(Math.random() * 10);
      let num2 = Math.floor(Math.random() * 10) + 1;
      let calculator;
  
      beforeEach(function () {
        calculator = new Calculator();
      });
  
      it(
        `Should add '${num1}' plus '${num2}' and be equal to ` + (num1 + num2),
        function () {
          expect(calculator.add(num1, num2)).toBe(num1 + num2);
        }
      );
  
      it(
        `Should subtract '${num1}' minus '${num2}' and be equal to ` +
          (num1 - num2),
        function () {
          expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
        }
      );
  
      it(
        `Should divide '${num1}' by '${num2}' and be equal to ` + num1 / num2,
        function () {
          expect(calculator.division(num1, num2)).toBe(num1 / num2);
        }
      );
  
      it(
        `Should multiply '${num1}' by '${num2}' and be equal to ` + num1 * num2,
        function () {
          expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
        }
      );
    });
  
    describe("Testing the Display class", function () {
      let display;
  
      function displayF() {}
  
      beforeEach(function () {
        display = new Display(displayF);
      });
  
      it("Testing 'constructor(displayFunction)' method", function () {
        expect(display.displayFunction).toBe(displayF);
        expect(display.calculator).toBeInstanceOf(Object);
        expect(display.typeOperator).toBeUndefined();
        expect(display.currentValue).toBe("");
        expect(display.previousValue).toBe("");
        expect(display.signs).toBeInstanceOf(Object);
      });
      
      it("Testing 'delete' method", function () {
        spyOn(display, "printValues");
        display.currentValue = "12";
        display.delete();
        expect(display.currentValue).toBe("1");
        expect(display.printValues).toHaveBeenCalled();
        display.delete();
        expect(display.currentValue).toBe("");
        expect(display.printValues).toHaveBeenCalled();
      });
  
      it("Testing 'deleteAll' method", function () {
        spyOn(display, "printValues");
        display.currentValue = "12";
        display.previousValue = "34";
        display.typeOperator = "add";
        display.deleteAll();
        expect(display.currentValue).toBe("");
        expect(display.previousValue).toBe("");
        expect(display.typeOperator).toBeUndefined();
        expect(display.printValues).toHaveBeenCalled();
      });
  
      describe("Testing 'compute(type)' method", function () {
        beforeEach(function () {
          display = new Display(displayF);
        });
  
        it("Calls 'calculate' method if operator is not 'equal'", function () {
          spyOn(display, "calculate");
          display.typeOperator = "add";
          display.compute("subtract");
          expect(display.calculate).toHaveBeenCalled();
        });
  
        it("If there is currentValue, previousValue is set to it", function () {
          display.typeOperator = "equal";
          display.previousValue = "12";
          display.currentValue = "23";
          display.compute("substract");
          expect(display.previousValue).toBe("23");
        });
  
        it("The behaviour is correct", function () {
          spyOn(display, "printValues");
          display.compute("add");
          expect(display.typeOperator).toBe("add");
          expect(display.currentValue).toBe("");
          expect(display.printValues).toHaveBeenCalled();
        });
      });
  
      describe("Testing 'addNumber(num)' method", function () {
        beforeEach(function () {
          display = new Display(displayF);
        });
  
        it("A period is added if there isn't one already", function () {
          spyOn(display, "printValues");
          display.currentValue = "12";
          display.addNumber(".");
          expect(display.currentValue).toBe("12.");
          expect(display.printValues).toHaveBeenCalled();
        });
  
        it("A period is not added if there is one already", function () {
          spyOn(display, "printValues");
          display.currentValue = "12.";
          display.addNumber(".");
          expect(display.currentValue).toBe("12.");
          expect(display.printValues).not.toHaveBeenCalled();
        });
  
        it("Numbers are correctly displayed", function () {
          spyOn(display, "printValues");
          display.currentValue = "";
          display.addNumber("1");
          expect(display.currentValue).toBe("1");
          expect(display.printValues).toHaveBeenCalled();
          display.addNumber("2");
          expect(display.currentValue).toBe("12");
          expect(display.printValues).toHaveBeenCalled();
        });
      });
  
      it("Testing 'printValues' method", function () {
        spyOn(display, "displayFunction");
        display.printValues();
        expect(display.displayFunction).toHaveBeenCalled();
      });
  
      describe("Testing 'calculate' method", function () {
        beforeEach(function () {
          display = new Display(displayF);
        });
  
        it("Returns undefined when 'currentValue' cannot be parsed into a float", function () {
          display.previousValue = "12";
          display.currentValue = "a";
          expect(display.calculate()).toBeUndefined();
        });
  
        it("Returns undefined when 'previousValue' cannot be parsed into a float", function () {
          display.previousValue = "a";
          display.currentValue = "12";
          expect(display.calculate()).toBeUndefined();
        });
  
        it("The appropriate 'calculator' method is called", function () {
          display.typeOperator = "add";
          display.previousValue = "12";
          display.currentValue = "34";
          display.calculate();
          expect(display.currentValue.toString()).toBe("46");
        });
      });
    });
  });
  