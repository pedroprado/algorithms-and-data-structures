const fc = require('./frequency_counter');


describe('Frequency Counter Problem', () =>{
    describe('Naive implementation', ()=>{
        it ('should return false for different sizes', ()=>{
            const arr1 = [1,2,3];
            const arr2 = [1,4];
    
            const result = fc.naive_same(arr1, arr2);
    
            expect(result).toBe(false);
    
        });
        it ('should return false for different frequencies', ()=>{
            const arr1 = [1,3,3];
            const arr2 = [1,4,9];
    
            const result = fc.naive_same(arr1, arr2);
    
            expect(result).toBe(false);
        });
        it ('should return true', ()=>{
            const arr1 = [1,2,3];
            const arr2 = [1,4,9];
    
            const result = fc.naive_same(arr1, arr2);
    
            expect(result).toBe(true);
        });
    });
    describe('Frequency Counter Pattern Implementation', ()=>{
        it ('should return false for different sizes', ()=>{
            const arr1 = [1,2,3];
            const arr2 = [1,4];
    
            const result = fc.same(arr1, arr2);
    
            expect(result).toBe(false);
    
        });
        it ('should return false for different keys', ()=>{
            const arr1 = [1,2,3];
            const arr2 = [1,6,9];
    
            const result = fc.naive_same(arr1, arr2);
    
            expect(result).toBe(false);
        });
        it ('should return false for different frequencies', ()=>{
            const arr1 = [1,3,3];
            const arr2 = [1,4,9];
    
            const result = fc.naive_same(arr1, arr2);
    
            expect(result).toBe(false);
        });
        it ('should return true', ()=>{
            const arr1 = [1,2,3];
            const arr2 = [1,4,9];
    
            const result = fc.naive_same(arr1, arr2);
    
            expect(result).toBe(true);
        });
    });
   
});