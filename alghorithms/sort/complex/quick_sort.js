

//Divide and Conquer
//Also Exploits the fact that an array with 0 or 1 element is already sorted

//Sorting
//Idea: Select on element of the array as the pivot
//Put all the elements < pivot to the left of it, and all 
//the elements > pivot to the right of it (We Need a PIVOT HELPER FUNCTION)

// Do it again to the left (0 to pivotindex) and right (pivotindex+1 to array.length) side of the array

const quick_sort = (arr, start=0, end=arr.length) => {
    
    if(start < end){
        const pivotValue = pivot(arr , start, end);
        quick_sort(arr, start, pivotValue );
        quick_sort(arr, pivotValue+1, end);
    }
    return arr;
};


//PSEUDO CODE PIVOT HELPER
//1.Select a pivot (there are strategies for it, but, for simplicity
// we choose the first element of the array)
//2.Save the index of the pivot
//3.Iterate the array, if we find and element<pivot, increase de 
//pivot index by 1 and move that element to that place
//4.At the end of the iteration, swapped the first element (selected pivot)
//with the element in the pivot index
const pivot = (arr, startIndex = 0, endIndex = arr.length) => {

    const pivot = arr[startIndex];
    let pivotIndex = startIndex;

    for(let i = startIndex + 1; i < endIndex; i ++){
        if(arr[i] < pivot){
            pivotIndex ++;

            const temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;

        }
    }

    const temp2 = arr[pivotIndex];
    arr[pivotIndex] = arr[startIndex];
    arr[startIndex] = temp2; 

    return pivotIndex;
};


//Time Complexity: n log g (worst case n^2)
//Space Complexity : log n

module.exports = { quick_sort, pivot }