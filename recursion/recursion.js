
//Basically, it as function that calls itself

//It is a cleaner solution for some functions

//Callstack
//Normal functions: functions being called are add to the top of the stack (PUSHDE) a they only come out (POP) when it returns a value
//Recursive functions: keep pushing new functions to the callstack!!

//GAME PLAN (how recursive functions work)

//Invoke the same functions with DIFFERENT INPUT until you reach the BASE CASE
//***BASE CASE: END OF THE LINE. A condition where the Recursion Stops */

//Essencials of Recursions: BASE CASE and DIFFERENT INPUTS
//Do not forget to return in the BASE CASE
//Do not forget to return the recursive call (with diferent input)


const factorial = n =>{
    let product = 1;
    for( let i = n; i> 0; i--){
        product = product * i;
    }
    return product;
};


const factorialRecursive = n =>{
    //BASE CASE => n=1
    if(n ===1) return 1;
    return n * factorialRecursive(n-1);
};

//DESIGN PATTERN : HELPER METHOD RECURSION
//WE have two functions: the main function (outer) and the recursive function inside (helper)
//It is usefull when we need to store data at each recursive call
//Example: collect odds functions

const collectOdds = (nums) => {
    let odds = [];

    function helper(arr){
        if(arr.length === 0) return;
        if(arr[0]%2 !== 0){
            odds.push(arr[0]);
        }
        helper(arr.slice(1));
    }

    helper(nums);
    return odds;
};

//PURE RECURSIONS:
//For recursive functions that uses arrays, use methods that return copies of the array (slice, spread, concat,...)


module.exports = {factorial, factorialRecursive, collectOdds};
