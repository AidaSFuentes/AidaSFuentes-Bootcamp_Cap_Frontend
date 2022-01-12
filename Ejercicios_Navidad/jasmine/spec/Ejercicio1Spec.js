describe ("testing get a Random Number getRan(min, max", function(){
    let min;
    let max;

    it ("Does not allow min greater than max", function(){
        min = 80;
        max = 70;
        expect(() => getRan(min, max)).toThrowError(RangeError);
    });
    it("Just works with positive numbers", function(){
        min = -1;
        max = 1;
        expect(() => getRan(nim, max)).toThrowError()
    })
});