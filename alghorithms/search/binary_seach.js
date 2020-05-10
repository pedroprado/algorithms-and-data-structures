

//Binary Search: Algorithm is relies on SORTED ARRAYS. It divides the array into two pieces and check in which of these the element being searched should be.


//PSEUDO CODE
//1.Function that receives a SORTED ARRAY and a VALUE
//2.Start two pointers: start ( beginning of the array) and end(end of the array)
//3.Find the middle point and set a mid pointer there
//5.Check if the VALUE is at the middle ( element[mid] = VALUE)
//.If it is, we are done
//.If it is not and the element[mid] < VALUE so the VALUE is in the right part of the array. Move the start pointer to mid+1
//.If it is not and the element[mid] > VALUE then the VALUE should be in the left part of the array. Move the end point do mid-1
//6.Continue to search while not found value, or the start <= end
//7.At the end of the search, check if the element of mid (updated during the search) is the value (elem[mid] == VALUE)
//8.If it is, return mid pointer 
//9.If it is not, return -1 


const binary_search = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start+end)/2);

    while(arr[mid] !== val && start <= end){
        if(val > arr[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
        mid = Math.floor((start+end)/2);
    }
    if(arr[mid] === val){
        return mid;
    }else{
        return -1;
    }
};


//Time Complextity: Log n (worst and average)  o(1) in best case
 
module.exports = { binary_search }