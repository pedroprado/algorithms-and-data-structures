
//Given two integers, find out if the two numbers have the same frequency of digits
//Tip: Use Frequency Counter Pattern
const sameFrequency = (number1, number2) => {

    let counter1 = {};
    let counter2 = {};

    let n1 = number1;
    let n2 = number2;

    let numberOfDigits1 = 0;
    let numberOfDigits2 = 0;

    while(n1 > 0){
        const digit = n1%10;
     
        counter1[digit] = (counter1[digit]+1 || 1);

        numberOfDigits1++;
        n1 = Math.floor(n1/10);
    }

    while(n2 > 0){
        const digit = n2%10;
     
        counter2[digit] = (counter2[digit]+1 || 1);

        numberOfDigits2++;
        n2 = Math.floor(n2/10);
    }

    if(numberOfDigits1 !== numberOfDigits2) return false;

    for(let freq in counter1){
        if( counter1[freq] !== counter2[freq]) return false;
        if( !(freq in counter2) ) return false;
    }

    return true;

};

//Functions receives a VARIABLE number of arguments and checks whter there are any duplicates among the arguments passed in.
//Using FREQUENCY COUNTER
const areThereDuplicatesFC = (arr) =>{
    const counter = {};

    for(let i =0; i<arr.length; i++){
        const element = arr[i];
        counter[element] = (counter[element]+1)|| 1;
    }

    for(let key in counter){
        if(counter[key]> 1) return true;
    }

    return false;
};


//Using MUMTIPLE POINTERS
const areThereDuplicatesMP = (arr) =>{

    let pointer1 = 0;
    let pointer2 = 1;

    arr.sort((a,b) => a>b);

    while(pointer2 < arr.length){
        if(arr[pointer1] === arr[pointer2]){
            return true;
        }
        pointer2++;
        pointer1++;
    }
    return false;

};

//Function that receives a SORTED array of integers and a TARGET AVERAGE
//It determines if there is a pair of values in the array where the average = TARGET AVERAGE
//There may be more than one pair that matches the TARGET AVERAGE
//MULTIPLE POINTERS PATTERN
const averagePair = (arr, avg) =>{

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        const average = (arr[left]+arr[right])/2;

        if(average > avg){
            right--;
        }
        if(average < avg){
            left++;
        }
        if(average === avg){ return true;}
    }

    return false;
};

//Function which takes two strings and checks wheter the characters in the first string form a subsequence of the second string
//In other words, the function should check wwhether the characters in the first string appear SOMEWHERE in the second string
//Without order changing
//MULTIPLE POINTERS PATTERN
const isSubsequence = (str1, str2) => {

    let pointer1 = 0;
    let pointer2 = 0;

    for(let i=0; i<str2.length; i++){
        if(str1[pointer1] === str2[pointer2]){
            if(pointer1 === str1.length-1){
                return true;
            }else{
                pointer1++;
                pointer2++;
            }
        }else{
            pointer2++;
        }
    }
    return false;
};


const maxSubarraySum = (arr) =>{

};



module.exports = {
    sameFrequency, 
    areThereDuplicatesFC, 
    areThereDuplicatesMP, 
    averagePair,
    isSubsequence,
    maxSubarraySum
}