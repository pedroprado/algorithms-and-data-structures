
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


module.exports = { 
    reverse,
    reverseIterative,
    isPalindrome
}