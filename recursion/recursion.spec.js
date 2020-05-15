const recursion = require('./recursion');

describe('RECURSIVE FUNCTIONS', ()=> {
    describe('Factorial', () =>{
        it('should return factorial', () => {
            const factorial = recursion.factorial(5);
    
            expect(factorial).toBe(120);
        });
        it('should return factorial recursive', () => {
            const factorial = recursion.factorialRecursive(5);
    
            expect(factorial).toBe(120);
        });
    });
    describe('collect odds', ()=>{
        it('should return the odds', ()=>{
            const odds = recursion.collectOdds([1,2,2,2,3]);

            expect(odds).toStrictEqual([1,3]);
        });
    });
});

