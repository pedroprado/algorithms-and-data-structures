const challenges = require('./recursion_challenges');

describe('Recursion Problems Tests',()=>{
    describe('Power Function Tests', ()=>{
        it('should calculate power to 0 equals 1', ()=>{
            const power = challenges.powerRecursive(2,0);

            expect(power).toBe(1);
        });
        it('should calculate power to 2 equals 4', ()=>{
            const power = challenges.powerRecursive(2,2);

            expect(power).toBe(4);
        });
        it('should calculate power to 4 equals 16', ()=>{
            const power = challenges.powerRecursive(2,4);

            expect(power).toBe(16);
        });
     });
     describe('Factorial Function Tests', ()=>{
        it('should calculate factorial of 1', ()=>{
            const factorial = challenges.factorialRecursive(1);

            expect(factorial).toBe(1);
        });
        it('should calculate factorial of 2', ()=>{
            const factorial = challenges.factorialRecursive(2);

            expect(factorial).toBe(2);
        });
        it('should calculate factorial of 4', ()=>{
            const factorial = challenges.factorialRecursive(4);

            expect(factorial).toBe(24);
        });
        it('should calculate factorial of 7', ()=>{
            const factorial = challenges.factorialRecursive(7);

            expect(factorial).toBe(5040);
        });
     });
     describe('Product of Array Tests', ()=>{
        it('should calculate product equals 6', ()=>{
            const product = challenges.productOfArray([1,2,3]);

            expect(product).toBe(6);
        });
        it('should calculate product equals 60', ()=>{
            const product = challenges.productOfArray([1,2,3,10]);

            expect(product).toBe(60);
        });
     });
     describe('Recursive Range Tests', ()=>{
        it('should calculate sum equals to 21', ()=>{
            const sum = challenges.recursiveRange(6);

            expect(sum).toBe(21);
        });
        it('should calculate sum equals to 55', ()=>{
            const sum = challenges.recursiveRange(10);

            expect(sum).toBe(55);
        });
     });
     describe('Fibonacci Tests', ()=>{
        it('should get fib 4', ()=>{
            const fib = challenges.fibRecursive(4);

            expect(fib).toBe(3);
        });
        it('should get fib 10', ()=>{
            const fib = challenges.fibRecursive(10);

            expect(fib).toBe(55);
        });
        it('should get fib 28', ()=>{
            const fib = challenges.fibRecursive(28);

            expect(fib).toBe(317811);
        }); 
        it('should get fib 35', ()=>{
            const fib = challenges.fibRecursive(35);

            expect(fib).toBe(9227465);
        });
     });
});