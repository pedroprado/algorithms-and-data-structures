
//Linear Search: Algorithm that iterates and array, one by one element, and check if that element is the desired one

//PSEUDO CODE

//1.Function that receives and array and a value
//2.Loop through the array and, if found an element==value, return the index of that element
//If did not find the element, return -1

const linear_search = (arr, val) => {

    for(let i = 0; i< arr.length; i ++ ){
        if(arr[i] === val ){
            return i;
        }
    }
    return -1;

};

//Time complexity: n ( best case =1 , worst = n)

module.exports = { linear_search }