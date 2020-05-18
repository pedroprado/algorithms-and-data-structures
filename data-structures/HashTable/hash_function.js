//HASH FUNCTIONS:
//1.FAST and CONSTANT;
//2.UNIFORM : low indidence of COLLISIONS
//3.DETERMINISTIC: same input, same output!



//My hash function receives a string and converts to a numeric value
//The conversion: sums the numberic value of EACH CHARACTER of the string
//Numeric value of a char:  charCode function
//Subtracting 96 of the charCode, we have the alphabetic position:
//     a.charCode - 96 = 1
//     b.charCode - 96 = 2
//and so on...
//arryLen is the MOD we want: is it the number of HASH MAPS (KEYS) we want
const myHash = (key, arrayLen) => {
    let total = 0;

    for(let i = 0; i< key.length; i++){
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total =  total + value;
    }
    return total%arrayLen;
};
//Problems:
//IT is not CONSTANT TIME: time complexity grows with key size
//IT is not UNIFORM: some keys may have similar values (COLLISIONS)


//PRIME NUMBERS: help the with spreading out the keys more UNIFORMLY
//ArrayLen with PRIME SIZE also helps!
//PRIME NUMBERS => reduce COLLISIONS
const betterHash = (key, arrayLen) => {
    let total = 0;
    const WEIRD_PRIME = 31;
    for(let i=0; i<Math.min(key.length, 100); i++){
        const char = key[i];
        const value = char.charCodeAt(0) - 96;
        total = total*WEIRD_PRIME+ value;
    }
    return total%arrayLen;
};



//COLLISIONS HANDLING STRATEGIES
//Separate Chainning:
//Store things together: both, blue and salmon will be stored AT THE SAME array position.
//For recovering one of them, we have to iterate through the NESTED ARRAY, which contains both colors
// human readable key      hashed key(map)    value
//   blue                    4  <--           XXXX
//   salmon                  4  <--           YYYY

//Linear Probing
//When there is a collision, we look for the next empty space.
// human readable key      hashed key(map)    value
//   blue                    4                XXXX
//   salmon                  5 <---           YYYY

//Separate chainning is better if we want to find a place for every key in the Table
//Once the table is filled. using Linear Probing, we have to find a strategy to deal with other incoming collisions

module.exports = { myHash, betterHash }