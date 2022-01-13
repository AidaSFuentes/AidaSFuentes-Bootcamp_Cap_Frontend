describe ("Unit test with a calculator and Jasmine", function(){
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    it(`Should add ${num1} ' plus ' ${num2} ' and be equals to '` + (num1 + num2), function () {
        expect(Calculator.add(num1, num2)).toBe(num1 + num2);
    });
});