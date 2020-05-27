

//Problem 2:
//Given Two Strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema and iceman
//NOTE: You may assume the string contains oly lowercase alphabets

//examples:
//anagram('awesome','awesom')  => false
//anagram('qwerty', 'qeywrt')  => true
//anagram('anagram', 'nagaram')  => true
//anagram('aaz', 'zza')  => false

const anagram = (str1, str2) =>{

    //should have same length
    if(str1.length !== str2.length) return false;

    //should have the same characters with the same frequencies

    const count1 = {};
    const count2 = {};

    //frequencies of string one chars
    for(let char in str1){
        count1[char] = (count1[chart] || 0) +1;
    }

    //frequencies of string two chars
    for(let char in str2){
        count2[char] = (count2[char] || 0) +1;
    }


};