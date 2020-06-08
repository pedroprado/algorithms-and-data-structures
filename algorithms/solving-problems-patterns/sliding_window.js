
//Sliding Window Pattern
//Usefull for keeping track of a SUBSET of data (substrings and subarrays)
//Creates a window from one position to another
//The window either increases or closes

//Example 1 (maxSubarraySum)
//Write a function called maxSubarraySum, which accepts an array of integers and a number called n
//The function should calculate the maximum sum of n consecutive elements in the array

//maxSubarraySum([1,2,5,2,8,1,5], 2)   result=10
//maxSubarraySum([1,2,5,2,8,1,5], 4)   result=17
//maxSubarraySum([4,2,1,6], 1)   result=6
//maxSubarraySum([4,2,1,6,2], 4)   result=13
//maxSubarraySum([], 4)   result = null

//Sliding window Version
//The sum array should go up from the initial subarray
//Time Complexity = O(n)
const maxSubarraySum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;

    //initial sum
    for(let i = 0; i< n; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i= n; i<arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i-n];
        maxSum=  Math.max(maxSum, tempSum);
    }
    return maxSum;
};

//Naive version => using loops = O(n^2)
const maxSubarraySumNaive = (arr, n) => {
    let max = -Infinity;

    for(let i = 0; i <= arr.length - n; i ++){
       let sum = 0;
        for(let j=i; j< n+i; j++){
            sum+= arr[j];
        }
        if(sum > max){ max = sum;}
    }

    return max;
};

module.exports = {maxSubarraySum, maxSubarraySumNaive}