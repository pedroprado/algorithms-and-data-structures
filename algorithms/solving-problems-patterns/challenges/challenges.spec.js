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
});