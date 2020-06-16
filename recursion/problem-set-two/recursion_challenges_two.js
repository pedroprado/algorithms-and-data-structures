
//Function that reverses a string in a recursive way
const reverse = str =>{

    if(str.length <= 1) return str;

    const reversed = reverse(str.slice(1)) + str[0];

    return reversed;
};

const reverseIterative = str =>{

    const set = {};

    const reversed = [];

    for(let i =0; i<str.length; i++){
        set[i] = str[i];
    }

    for(let j= str.length-1; j>=0; j--){
        reversed.push(set[j]);
    }

    return reversed.join('');
};

//Palindrome: return true if the strin is palindrome( reads the same foward and backward)
const isPalindrome = str =>{
    if(str.length <= 0) return false;
    if(str.length === 1) return true;
    if(str.length === 2) return str[0]===str[1];

    const reversed = str[0]=== str[str.length-1] && isPalindrome(str.slice(1,str.length-1));

    return reversed;
};

//SOME RECURSIVE: 
//Function that returns true if a single value in the array returns true when passed to the callback
//Otherwise returns false
const someRecursive = (arr, callBack) => {

    if(arr.length === 0) return false;

    const result = callBack(arr[0]) || someRecursive(arr.slice(1), callBack);

    return result;
};

//FLATTEN
//Function that accepts and array of arrays and returns a NEW ARRAY, with all values flattened
const flatten = (arr)=>{

    let newArray = null;

    if(arr.length === 0) return [];

    if(arr[0].length === undefined) newArray = [arr[0]];

    if(arr[0].length >= 0) newArray = flatten(arr[0]);

    const result = newArray.concat(flatten(arr.slice(1)))

    return result;

};


//CAPITALIZE FIRST
//Function that capitalizes the first letter of each string of an array of strings

const capitalizeFirst = arr =>{
    
    let capitalized;

    if(arr.length === 0) return [];

    if(arr[0].length === 1){
        capitalized = arr[0].toUpperCase();
    }else{
        capitalized = arr[0][0].toUpperCase().concat(arr[0].slice(1));
    }

    const result = [capitalized].concat(capitalizeFirst(arr.slice(1)));

    return result;
};


//Function that returns the sum of all even numbers in an object which may contain nested objects
const nestedEvenSum = obj =>{

    let count=0;
    for(let key in obj){
        if(typeof(obj[key]) === 'object'){
            count += nestedEvenSum(obj[key]);
        }
        if(obj[key]%2 === 0){
            count += obj[key];
        }
    }

    return count;
};

//Function that, given and array of words, returns a NEW ARRAY containeing each word capitalized
const capitalizeWords = words => {
    if(words.length === 0)  return [];

    const result = [words[0].toUpperCase()].concat(capitalizeWords(words.slice(1)));

    return result;
};

//Function that takes and object and finds all of the values which are numbers and converts them to strings
const stringifyNumbers = obj => {

    const newObj = {};

    for(let key in obj){
        if(typeof(obj[key]) === 'number'){
            const stringified = obj[key].toString();
            newObj[key]= stringified;
       
        }else{
            if(!Array.isArray(obj[key])){
                if(typeof(obj[key]) === 'object'){
                    newObj[key] = stringifyNumbers(obj[key]);
                }else{
                    newObj[key] = obj[key];
                }
            }else{
                newObj[key] = obj[key];
            }
        } 
        
    }
    return newObj;
};

//Function that receives an object and returns an ARRAY of all the values in the object that have a type of string
const collectStrings = obj => {
    let result = [];

    for(let key in obj){
        if(typeof(obj[key]) === 'string'){
            result.push(obj[key]);
        }else{
            if(typeof(obj[key] === 'object')){
                result = result.concat(collectStrings(obj[key]));
            }
        }
    }

    return result;
};

module.exports = { 
    reverse,
    reverseIterative,
    isPalindrome,
    someRecursive,
    flatten,
    capitalizeFirst,
    nestedEvenSum,
    capitalizeWords,
    stringifyNumbers,
    collectStrings
}