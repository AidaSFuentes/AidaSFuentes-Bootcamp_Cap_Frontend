describe ("Unit test with a calculator and Jasmine", function(){
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    

    it(`Should add ${num1} ' plus ' ${num2} ' and be equals to '` + (num1 + num2), function () {
        const calculator = new Calculator();
        expect(calculator.add(num1, num2)).toBe(num1 + num2);
    });

    it(`Should subtract ${num1} ' minus ' ${num2} ' and be equals to '` + (num1 - num2), function () {
        const calculator = new Calculator();
        expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
    });

    it(`Should division ${num1} ' divided ' ${num2} ' and be equals to '` + (num1 / num2), function () {
        const calculator = new Calculator();
        expect(calculator.division(num1, num2)).toBe(num1 / num2);
    });

    it(`Should multiply ${num1} ' multiplied ' ${num2} ' and be equals to '` + (num1 * num2), function () {
        const calculator = new Calculator();
        expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
    });
});