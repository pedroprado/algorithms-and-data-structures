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
    describe('MaxSubarraySum Tests', ()=>{
        it('Should find max 700', ()=>{
            const max = challenges.maxSubarraySum([100,200,300,400], 2);

            expect(max).toBe(700);
        });
        it('Should find max 39', ()=>{
            const max = challenges.maxSubarraySum([1,4,2,10,23,3,1,0,20], 4);

            expect(max).toBe(39);
        });
        it('Should find max 5', ()=>{
            const max = challenges.maxSubarraySum([-3,4,0,-2,6,-1], 2);

            expect(max).toBe(5);
        });
        it('Should find another max 5', ()=>{
            const max = challenges.maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2);

            expect(max).toBe(5);
        });   
        it('Should find max null', ()=>{
            const max = challenges.maxSubarraySum([2,3], 3);

            expect(max).toBe(null);
        });
    });
    describe('MinSubArrayLen Tests', ()=>{
        it('Should find min len equals to 2', ()=>{
            const minLen = challenges.minSubarrayLen([2,3,1,2,4,3], 7);

            expect(minLen).toBe(2);
        });
        it('Should find min len equals to 2, for n=9', ()=>{
            const minLen = challenges.minSubarrayLen([2,1,6,5,4], 9);

            expect(minLen).toBe(2);
        });
        it('Should find min len equals to 1', ()=>{
            const minLen = challenges.minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52);

            expect(minLen).toBe(1);
        });
        it('Should find min len equals to 3', ()=>{
            const minLen = challenges.minSubarrayLen([1,4,16,22,5,7,8,9,10], 39);

            expect(minLen).toBe(3);
        });
        it('Should find min len equals to 5', ()=>{
            const minLen = challenges.minSubarrayLen([1,4,16,22,5,7,8,9,10], 55);

            expect(minLen).toBe(5);
        });
        it('Should find min len equals to 2, for n=11', ()=>{
            const minLen = challenges.minSubarrayLen([4,3,3,8,1,2,3], 11);

            expect(minLen).toBe(2);
        });
        it('Should find min len equals to 0', ()=>{
            const minLen = challenges.minSubarrayLen([1,4,16,22,5,7,8,9,10], 95);

            expect(minLen).toBe(0);
        });
    });
    describe('FindLongestSubstring Tests', ()=>{
        it('Should find 0', ()=>{
            const longest = challenges.findLongestSubstring('');

            expect(longest).toBe(0);
        });
        it('Should find 7', ()=>{
            const longest = challenges.findLongestSubstring('rithmschool');

            expect(longest).toBe(7);
        });
        it('Should find 6', ()=>{
            const longest = challenges.findLongestSubstring('thisisawesome');

            expect(longest).toBe(6);
        });
        it('Should find 7, for input', ()=>{
            const longest = challenges.findLongestSubstring('thecatinthehat');

            expect(longest).toBe(7);
        });
        it('Should find 1', ()=>{
            const longest = challenges.findLongestSubstring('bbbbbbbb');

            expect(longest).toBe(1);
        });
        it('Should find 8', ()=>{                      
            const longest = challenges.findLongestSubstring('longestsubstring');

            expect(longest).toBe(8);
        });
        it('Should find 6', ()=>{
            const longest = challenges.findLongestSubstring('thisishowwedoit');

            expect(longest).toBe(6);
        });
    });
});