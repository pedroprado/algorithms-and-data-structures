const challenges = require('./recursion_challenges_two');


describe('Recusion Challenges Two Tests', ()=>{
    describe('Reverse Function Tests', ()=>{
        it('should reverse string awesome', ()=>{
            const reversed = challenges.reverse('awesome');

            expect(reversed).toBe('emosewa');
        });
        it('should reverse string rithmschool', ()=>{
            const reversed = challenges.reverse('rithmschool');

            expect(reversed).toBe('loohcsmhtir');
        });
    });
    describe('Is Palindrome Tests', ()=>{
        it('should not be palindrome for string awesome', ()=>{
            const isPalindrome = challenges.isPalindrome('awesome');

            expect(isPalindrome).toBe(false);
        });
        it('should not be palindrome for string foobar', ()=>{
            const isPalindrome = challenges.isPalindrome('foobar');

            expect(isPalindrome).toBe(false);
        });
        it('should be palindrome for string tacocat', ()=>{
            const isPalindrome = challenges.isPalindrome('tacocat');

            expect(isPalindrome).toBe(true);
        });
        it('should be palindrome for string amanaplanacanalpanama', ()=>{
            const isPalindrome = challenges.isPalindrome('amanaplanacanalpanama');

            expect(isPalindrome).toBe(true);
        });
    });
    describe('Some Recursive Tests', ()=>{
        const isOdd = val => val%2 !== 0;
        const isGreaterThanTen = val => val > 10;

        it('should be odd', ()=>{
            const result = challenges.someRecursive([1,2,3,4], isOdd);

            expect(result).toBe(true);
        });
        it('should be odd too', ()=>{
            const result = challenges.someRecursive([4,6,8,9], isOdd);

            expect(result).toBe(true);
        });
        it('should not be odd', ()=>{
            const result = challenges.someRecursive([4,6,8], isOdd);

            expect(result).toBe(false);
        });
        it('should be greater than 10', ()=>{
            const result = challenges.someRecursive([4,6,8], isGreaterThanTen);

            expect(result).toBe(false);
        });
    });
});