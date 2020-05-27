
//FREQUENCY COUNTER
//This pattern uses Objects of Sets to collect values/frequencies of values
//This avoids O(n^2) nested loops
//***iteration over 2 arrays (2n) is better than 2 nested arrays (n^2)

//Problem 1
//Write a functions called same, which accepts two arrays.
//Should return true if every value in the first array has it's corresponding value squared in the second array.
//The frequency of values must be the same (the order does not matter)

//examples:
//same([1,2,3,], [1,4,9])  => true
//same([1,2,3,], [9,4,1])  => true

//naive solution: O(n^2)
const naive_same = (arr1, arr2) => {

    //for the frequency to be the same, the length of both arrays should also be the same
    if(arr1.length !== arr2.length) return false;

    for(let i =0; i<arr1.length; i++){
        const element = arr1[i];
        const arr2Index = arr2.indexOf(element*element);  // timme complexity of N => it has to search the array for the element
        if(arr2Index === -1) return false;
        arr2.splice(arr2Index, 1);
    }
    return true;
};

//optimized solution, using FREQUENCY COUNTER
//Count the frequency of each array separately
//same([1,2,3,], [9,4,1])  => true
const same = (arr1, arr2) =>{
    if(arr1.length !== arr2.length) return false;
    const freq1 = {};
    const freq2 = {};

    //count frequency of array 1
    for(let val of arr1){
        freq1[val] = (freq1[val] || 0) + 1;
    }

    //count frequency of array 2
    for(let val of arr2){
        freq2[val] = (freq2[val] || 0) + 1;
    }

    //compare frequencies
    for(let key in freq1){
        if(!(key*key in freq2)) return false    //time complexity O(1) => search for the key is constant time!
        if(freq1[key] !== freq2[key*key]) return false
    }
    return true;

};

module.exports = { naive_same, same }