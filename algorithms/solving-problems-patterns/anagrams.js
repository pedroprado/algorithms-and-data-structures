

//Problem 2:
//Given Two Strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema and iceman
//NOTE: You may assume the string contains oly lowercase alphabets

//examples:
//anagram('awesome','awesom')  => false
//anagram('qwerty', 'qeywrt')  => true
//anagram('anagram', 'nagaram')  => true
//anagram('aaz', 'zza')  => false

const isAnagram = (str1, str2) =>{

    //should have same length
    if(str1.length !== str2.length) return false;

    //should have the same characters with the same frequencies

    const count1 = {};
    const count2 = {};

    //frequencies of string one' chars
    for(let i=0; i<str1.length; i++){
        count1[str1.charAt(i)] = (count1[str1.charAt(i)] || 0) +1;
    }

    //frequencies of string two' chars
    for(let j in str2){
        count2[str2.charAt(j)] = (count2[str2.charAt(j)] || 0) +1;
    }

    //they must be equals
    for(let key in count1){
        if(!(key in count2)) return false;
        if( count2[key] !== count1[key]) return false;
    }

    return true;
    
};

module.exports = {isAnagram};