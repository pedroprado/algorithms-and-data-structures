

//Bubble Sort Ideia: Algorithm that pushes de higher-value element to the end of the array

//Pseudo-Code (Non Optimized form) 
//1.Iterates the array comparing index i and i+1, till the end of the array (n)
//2.If i>i+1, swap the elements
//3.Repeat the process n-1 times (were n is the length of the array)
//(so the amount of comparisons is  (n-1)^2 and 


const bubble_sort1 = (array)=> {
    
    for(let i = 0; i < array.length -1 ; i ++){
        for(let j = 0; j < array.length - 1; j ++){
            console.log(array[j], array[j+1])
            if(array[j] > array[j+1]){
                swapp(array, j ,j+1);
            }
        }
    }
    return array;
}

//Optimization 1: 
//1.number of comparisons = n-1
//2.after pushing one element to the top, the next comparison
//should comparte till n-1 (n = length of the array)

const bubble_sort2 = (array) => {

    for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length - 1 - i; j ++){
            console.log(array[j], array[j+1])
            if(array[j] > array[j+1]){
                swapp(array, j ,j+1);
              }
        }
    }
    return array;
};

//Optimization 2:
//If no elements were swapped, then the array is already sorted
//Insert flag to detect if the array is already sorted
//This flag means: "No elements were swapped"
const bubble_sort3 = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        let swapped = false;
        for(let j = 0; j < array.length -1 - i; j ++){
            console.log(array[j], array[j+1])
            if(array[j] > array[j+1]){
                swapp(array, j ,j+1);
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return array;
};


const swapp = (array, elem1, elem2) => {
    let temp = array[elem1];
    array[elem1] = array[elem2];
    array[elem2] = temp;
};

//Time complexity is n^2 (n is the number os numbers compared each iteration)
//Time complexity: Worst case n2 (Best case n - already sorted)
//Space complexity: 1

module.exports = { bubble_sort1 , bubble_sort2 ,bubble_sort3};
