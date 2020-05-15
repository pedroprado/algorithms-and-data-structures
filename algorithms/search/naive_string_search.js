

//Search substring inside a string


//PSEUDO CODE
//1.Loop over the longer string
//2.Loop over the shorter string
//3.If chars dont match, break out of the inner loop
//4.If chars do match, keep going
//5.If completed the inner loop and found a match, increment a counter
//6.Return the count


const naive_string_search = (long, short) => {

    let match = 0;

    for(let i = 0; i< long.length; i ++){

        let char_match = 0;
        for(let j=0; j<short.length; j++){
            if(long[i+j] === short[j]){
                char_match ++;
            }else{
                break;
            }
        }
        if(char_match === short.length){
            match ++;
        }
    }

    return match;
};


module.exports = { naive_string_search }