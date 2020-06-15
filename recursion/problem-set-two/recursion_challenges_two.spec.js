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
    describe('Flatten Function Tests', ()=>{
        it('should flatten array 1', ()=>{
            const flattened = challenges.flatten([1,2,3, [4,5]]);

            expect(flattened).toStrictEqual([1,2,3,4,5]);
        });
        it('should flatten array 2', ()=>{
            const flattened = challenges.flatten([1, [2, [3,4],[[5]] ] ]);

            expect(flattened).toStrictEqual([1,2,3,4,5]);
        });
        it('should flatten array 3', ()=>{
            const flattened = challenges.flatten([[1],[2],[3]]);

            expect(flattened).toStrictEqual([1,2,3]);
        });
        it('should flatten array 4', ()=>{
            const flattened = challenges.flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

            expect(flattened).toStrictEqual([1,2,3]);
        });
    });
    describe('Capitalize First Tests', ()=>{
        it('should capitalize first 1', ()=>{
            const capitalized = challenges.capitalizeFirst(['car', 'taco', 'banana']);

            expect(capitalized).toStrictEqual(['Car', 'Taco', 'Banana']);
        });
    });
});