const challenges = require('./challenges');


describe('Challenges Tests', ()=>{
    describe('Same Frequency', ()=>{
        it ('Should have same frequency', ()=>{

            const same = challenges.sameFrequency(112,211)

            expect(same).toBe(true);
        });
        it ('Should not have same frequency', ()=>{

            const same = challenges.sameFrequency(112,212)

            expect(same).toBe(false);
        });
        it ('Should not have same frequency, different number of digits', ()=>{

            const same = challenges.sameFrequency(112,1123)

            expect(same).toBe(false);
        });
    });

    describe('Are There Duplicates Tests', ()=>{
        describe('Frequency Counter Implementation', ()=>{
            it('Should have duplicates', ()=>{
                const hasDuplicates = challenges.areThereDuplicatesFC([1,2,3,4,4]);
    
                expect(hasDuplicates).toBe(true);
    
            });
            it('Should have duplicates for differente inputs', ()=>{
                const hasDuplicates = challenges.areThereDuplicatesFC([1,'OA',3,4,'OA']);
    
                expect(hasDuplicates).toBe(true);
    
            });
            it('Should not have duplicates', ()=>{
                const hasDuplicates = challenges.areThereDuplicatesFC([1,2,3,4,5]);
    
                expect(hasDuplicates).toBe(false);
            });
        });
        describe('Multiple Pointers Implementation', ()=>{
            it('Should have duplicates', ()=>{
                const hasDuplicates = challenges.areThereDuplicatesMP([1,2,3,4,4]);
    
                expect(hasDuplicates).toBe(true);
    
            });
            it('Should not have duplicates', ()=>{
                const hasDuplicates = challenges.areThereDuplicatesMP([1,2,3,4,5]);
    
                expect(hasDuplicates).toBe(false);
            });
        });
    });
    describe('Average Pair Tests', ()=>{
        it('should find average 2.5', ()=>{
            const hasAverage = challenges.averagePair([1,2,3], 2.5);
            
            expect(hasAverage).toBe(true);
        });
        it('should find average 8', ()=>{
            const hasAverage = challenges.averagePair([1,3,3,5,6,7,10,12,19], 8);
            
            expect(hasAverage).toBe(true);
        });
        it('should not find average 4,1', ()=>{
            const hasAverage = challenges.averagePair([-1,0,3,4,5,6],4.1);
            
            expect(hasAverage).toBe(false);
        });
        it('should not find average 4', ()=>{
            const hasAverage = challenges.averagePair([], 4);
            
            expect(hasAverage).toBe(false);
        });
    });
    describe('IsSubsequence Tests',()=>{
        it('should find subsequence hello', ()=>{
            const isSubsequence = challenges.isSubsequence('hello', 'hello world');

            expect(isSubsequence).toBe(true);
        });
        it('should find subsequence sing', ()=>{
            const isSubsequence = challenges.isSubsequence('sing', 'sting');

            expect(isSubsequence).toBe(true);
        });
        it('should find subsequence abc', ()=>{
            const isSubsequence = challenges.isSubsequence('abc', 'abracadabra');

            expect(isSubsequence).toBe(true);
        });
        it('should not find subsequence abc', ()=>{
            const isSubsequence = challenges.isSubsequence('abc', 'acb');

            expect(isSubsequence).toBe(false);
        });
    });
});