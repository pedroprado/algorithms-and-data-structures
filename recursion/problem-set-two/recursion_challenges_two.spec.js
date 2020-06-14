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
});