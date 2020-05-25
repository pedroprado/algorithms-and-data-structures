const fibonacci = require('./fibonnaci');



describe('Test Fibonacci', ()=> {
    describe('Iterative', ()=>{
        it('Should return first', () =>{
            const element = fibonacci.iterative(1);
            
            expect(element).toBe(1);
        });
        it('Should return second', () =>{
            const element = fibonacci.iterative(2);
    
            expect(element).toBe(1);
        });
        it('Should return third', () =>{
            const element = fibonacci.iterative(3);
    
            expect(element).toBe(2);
        });
        it('Should return ninth', () =>{
            const element = fibonacci.iterative(9);
    
            expect(element).toBe(34);
        });
    });
    describe('Recursive', ()=>{
        it('Should return first', () =>{
            const element = fibonacci.fibRecursive(1);
            
            expect(element).toBe(1);
        });
        it('Should return second', () =>{
            const element = fibonacci.fibRecursive(2);
    
            expect(element).toBe(1);
        });
        it('Should return third', () =>{
            const element = fibonacci.fibRecursive(3);
    
            expect(element).toBe(2);
        });
        it('Should return ninth', () =>{
            const element = fibonacci.fibRecursive(9);
    
            expect(element).toBe(34);
        });
    });
    
});