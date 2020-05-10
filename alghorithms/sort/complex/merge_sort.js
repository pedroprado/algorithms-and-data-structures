
//Divide and Conquer
//Exploits the fact that an array with 0 or 1 element is already sorted

//FIRST STEP: is to split the array[n] in n arrays of one element
//SECONDE STEP: MERGE the sorted arrays (auxiliary function)


//PSEUDO CODE
//1.break the array into halvesm until you have arrays that are empty or have one element
//2.Start merging the arrays with the helper function (that merges two sorted arrays)
//3. Merge till ypu have the array up to the full length

//Time Complexity = n log n
//(n) is the time complexity of the comparisons 
//(log n) is the time complexty of the decompositions to get 
//size 0 or size 1 arrays

// This means that for an array of 8 elements we have 3 decompostions
//to get a array os 1 element, 
//then, at each decomposition group we have 8 comparisons 

//Space complexity = n
const merge_sort =  (arr) => {
    if(arr.length <= 1){ return arr;}

    const mid = Math.floor(arr.length/2);
    const half1 = merge_sort( arr.slice(0, mid));
    const half2 = merge_sort(arr.slice(mid));
    return mergeTwoSortedArray(half1, half2);

};


//Auxiliary Function: Merge two sorted Arrays
//Time Complexity; n+m (n and m are the size os the two merging arrays)
//PSEUDO CODE
// arrays N and M being merged
//1. Create an empty array (resultArray)
//2. Compare the first element of N with the first element of M
//3. If elem(N)<elem(M), push elem(N) to the empty array and move the pointer on N
//4. If elem(N)>elem(M), push elem(M) to the empty array and move the pointer on M
//5.Repeat till one array is exausted (N or M)
//6.Once one array is exausted, push all the remaininng elements of 
// the other array to the resultArray

const mergeTwoSortedArray = (arr1, arr2) => {
    const resultArray = [];
    let pointer1 = 0;
    let pointer2 = 0;

    let finished1 = false;
    let finished2 = false;

    if(arr1.length !== 0 && arr2.length !== 0){
        for(let i = 0; i< arr1.length*arr2.length; i ++){
            if(arr1[pointer1] <= arr2[pointer2]){
                resultArray.push(arr1[pointer1]);
                pointer1++;
                if(pointer1 >= arr1.length){
                    finished1= true;
                    break;
                }
            }
            if(arr1[pointer1] > arr2[pointer2]){
                resultArray.push(arr2[pointer2]);
                pointer2++;
                if(pointer2 >= arr2.length){
                    finished2= true;
                    break;
                }
            }
        }
    }

    if(finished1 || arr1.length === 0){
       for(let j = pointer2; j < arr2.length; j ++){
           resultArray.push(arr2[j]);
       } 
    }

    if(finished2 || arr2.length === 0){
        for(let k = pointer1; k < arr1.length; k ++){
            resultArray.push(arr1[k]);
        } 
    }

    return resultArray;
};

module.exports = {merge_sort, mergeTwoSortedArray};
