
//Multiple Pointers Pattern
//Very Efficient for solving problems with MINIMAL SPACE COMPLEXITY
//Creating pointers that corresponde to INDEX or POSITION
//Solve problems that need multiple references


//Example1 (Sum Zero): 
//Write a functon called sumZero, wich accepts a SORTED array of integers.
//The functions should find the first pair where the sum is 0.
//Return that pair, otherwise, return undefined


//Naive solution => time complexity O(n2)
const sumZeroNaive = arr =>{
    for(let i = 0; i<arr.length; i++){
        const first = arr[i];
        for(let j=i+1; j<arr.length; j++){
            const second = arr[j];
            if(first + second === 0){ 
                return [first, second];
            }
        }
    }
};


//Optimezed solution using multiple pointers: time complexity O(n)
const sumZero = arr => {

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        const sum = arr[left] + arr[right];

        if(sum === 0){
            return [arr[left], arr[right]] ;
        } else if( sum > 0){
            right --;
        }else{
            left ++;
        }
    }

    return undefined;
};

//Example2 (Count Unique Values)
//Write a function called countIniqueValues which accepts a sorted array and counts the unique values in the array
//There can be negative numbers in the array, but it will always be SORTED
//Time Complexity O(n)
const countUniqueValues = arr =>{ 
    let index1=  0;
    let index2 = 1;
    
    if(arr.length === 0) return 0;

    while(index2 < arr.length){
        const elem1 = arr[index1];
        const elem2 = arr[index2];

        if(elem2 === elem1){
            index2++;
        }else{
            index1++;
            arr[index1] = elem2;
            index2++;
        }
    }

    return index1+1;
};

module.exports = {sumZeroNaive, sumZero, countUniqueValues}
