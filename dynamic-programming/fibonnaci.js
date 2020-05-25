

//Fib(n) = Fib(n-1)+ Fib(n-2)

const iterative = (index) => {
    let fibPrev2 = 1;
    let fibPrev1 = 1;

    let fibNext;

    if(index <= 2) return 1;

    for(let i = 3; i<= index; i++){
        fibNext = fibPrev1 + fibPrev2;
        fibPrev2 = fibPrev1;
        fibPrev1 = fibNext;
    }
    return fibNext;
};

//Fib Recursive
//Stop point: BASE CASES
//index >0  and index <= 2, return 1!
//Time Complexity = EXPONENTIAL! = O(2^n) = VERY BAD!
//Space Complexity = O(1)
const fibRecursive = (index) =>{

    if(index <= 2) return 1;

    return fibRecursive(index -1) + fibRecursive(index -2);
};

//Fibonnaci Dynamic Programming: MEMOIZATION
//Using Memoization to Store Previous Subproblems results
//Time Complexity = O(N) => MUCH FASTER!
//Space Complexity = O(N)
const fibMemo = (index) =>{

};

//Fibonnaci Dynamic Programming: TABULATION
//Time Complexity = O(N) => MUCH FASTER!
//Better than FibMemo, cause it is not Recursive => Recursive has a limited amount of StackCall (it can throws StackSize Overflow Error!)
const fibTab = (index) =>{

};

module.exports = {iterative, fibRecursive};