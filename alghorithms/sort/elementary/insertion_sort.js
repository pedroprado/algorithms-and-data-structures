

//Insetion Sort Idea: It builds a sorted list gradually. It takes one element and find its place in the "growing sorted list"

//PSEUDO CODE

//1.Start with a "sorted portion" (it can be the first element of the array)
//2.Iterate the array: for each element, find the correct place in the "sorted portion" and insert it
//3.Repeat the process till the end of the array

//FINDING THE CORRECT PLACE IN THE SORTED PORTION
//The 'sorted portion' is already sorted: this means that, we can determine if the next element need ordered by knowing if it is less than the last
//element of the sorted portion
//   Example: [i,j] is the sorted part   
//           [[i,j],k]   ---> if k < j  find the correct place of k inside the sorted part
//           [[i,j],k]   ---> if k > j  just insert the k into the sorted part


const insertion_sort = (arr) => {
    for(let i = 1; i < arr.length; i++){
         const currentVal = arr[i];
        for(var j = i-1; j>= 0 && arr[j]> currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
};

//Time complexity: n^2 (best is n)
//Space complexity: 1

module.exports = { insertion_sort }