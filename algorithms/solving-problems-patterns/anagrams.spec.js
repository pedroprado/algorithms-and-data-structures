const fc = require('./anagrams');

describe('Anagram Test', ()=>{
    describe('Should be Anagram', ()=>{
        it ('Case 1', () =>{

            const isAnagram = fc.isAnagram('anagram', 'nagaram');
    
            expect(isAnagram).toBe(true);
        });
    
        it ('Case 2', () =>{
    
            const isAnagram = fc.isAnagram('qwerty', 'qeywrt');
    
            expect(isAnagram).toBe(true);
        });
    
        it ('Case 3', () =>{
    
            const isAnagram = fc.isAnagram('', '');
    
            expect(isAnagram).toBe(true);
        });
    });

    describe('Should not be Anagram', ()=>{

        it ('Case 1', () =>{

            const isAnagram = fc.isAnagram('aaz', 'zza');
    
            expect(isAnagram).toBe(false);
        });
        it ('Case 2', () =>{
    
            const isAnagram = fc.isAnagram('rat', 'car');
    
            expect(isAnagram).toBe(false);
        });
        it ('Case 3, different lengths', () =>{
    
            const isAnagram = fc.isAnagram('awesome', 'awesom');
    
            expect(isAnagram).toBe(false);
        });
    });
 

});