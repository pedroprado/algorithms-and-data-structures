const sw = require('./sliding_window');


describe('Sliding Window Tests', () =>{
    describe('Naive Version', ()=>{
        it ('should return 17', ()=>{
            const result = sw.maxSubarraySumNaive([1,2,5,2,8,1,5], 4);

            expect(result).toBe(17);
        });
        it ('should return 10', ()=>{
            const result = sw.maxSubarraySumNaive([1,2,5,2,8,1,5], 2);

            expect(result).toBe(10);
        });
    });
    describe("Sliding Window version", ()=>{
        it ('should return 17', ()=>{
            const result = sw.maxSubarraySum([1,2,5,2,8,1,5], 4);

            expect(result).toBe(17);
        });
        it ('should return 10', ()=>{
            const result = sw.maxSubarraySum([1,2,5,2,8,1,5], 2);

            expect(result).toBe(10);
        });
    });
});