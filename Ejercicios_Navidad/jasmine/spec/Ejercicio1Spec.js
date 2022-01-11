describe ("testing get a Random Number getRan(min, max", function(){
    let min;
    let max;

    it ("Does not allow min greater than max", function(){
        min = 80;
        max = 70;
        expect(() => getRan(min, max)).toThrowError(RangeError);
    });
});