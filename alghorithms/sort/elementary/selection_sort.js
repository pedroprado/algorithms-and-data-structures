
//Selection Sorted Idea:
//Algorithm that searches the minimum value and pushes it to the beginning of the array

//Pseudo Code
//1.Beginning with first element of the iteration ( in the first
//iteration, it should be array[0]
//2.Store array[0] as the minimum value (min)
//3.First loop: compare the min with the rest othe array
//4.If there is 'someElement' < min, make the min points to 'someElement'
//5.Swapped the element pointed by min (someElement) with the first
//element of the iteration
//6.Repeat the iteration for n times (n = array size)


//PS: at each iteration the size of the array should be decremeted by 1,
//since the first element of each iteration will be the smallest one

const selection_sort = (arr) => {

    for(let i = 0; i< arr.length; i ++){
        let minIndex = i;

        for(let k = i+1; k < arr.length; k++){
            if(arr[k] < arr[minIndex])
                minIndex = k;
        }

        if(minIndex !== i){
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
     
    }
  
    return arr;
};

//There is no way to determine if the list is already sorted!
//Thus, Selection Sort is bad for ALMOST OR ALREADY SORTED LIST

//Time Complexity = n^2  (best case is n^2)
//Space Complexity = 1

module.exports = { selection_sort }

