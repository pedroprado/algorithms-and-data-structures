
//POWER FUNCTION
//Function that receives a base and an exponent
const powerIterative = (base, exponent) =>{

    let power = base;

    if(exponent === 0) return 1;

    for(let i=1; i<exponent; i++){
        power = power * base;
    }

    return power;
};

const powerRecursive = (base, exponent) =>{

    if(exponent === 0) return 1;

    const power = base * powerRecursive(base, exponent-1);

    return power;
};

//FACTORIAL FUNCTION
const factorialIterative = (n) =>{
    let result = 1;

    if(n === 0) return 1;

    for(let i =n; i>0; i--){
        result = result*i;
    }

    return result;
}

const factorialRecursive = (n) =>{

    if(n<=0) return 1;

    const result = n*factorialRecursive(n-1);

    return result;
};

//PRODUCT OF ARRAY :Function that takes in an array of numbers and returns the product of them all 
const productOfArray = (arr) => {

    if(arr.length === 0) return 1;

    const result = arr[0]*productOfArray(arr.slice(1));

    return result;
};

//RECURSIVE RANGE: function that accepts a number N and adds up all the numbers from 0 to N (somatory)
const recursiveRange = (n) => {
    if(n <= 0) return 0;

    const result = n + recursiveRange(n-1);

    return result;
};

//FIBONACCI
const fibIterative = (n) =>{
    if(n <= 2) return 1;

    let prev1 = 1;
    let prev2 = 1;
    let next;

    for(let i = 3; i<=n; i++){
        next = prev1+ prev2;
        prev1 = prev2;
        prev2 = next;
    }

    return prev2;
    
};

const fibRecursive = (n) =>{
    if(n <=2) return 1;

    const result = fibRecursive(n-1) + fibRecursive(n-2);

    return result;
};

module.exports = {
    powerIterative,
    powerRecursive,
    factorialIterative,
    factorialRecursive,
    productOfArray,
    recursiveRange,
    fibIterative,
    fibRecursive
}