

//QUEUE is a collection of data
//FIFO: First In First Out: the FIRST thing to be inserted is the FIRST to be removed from the queue


//Where Queue is used?
//Background tasks
//Uploading
//Printings/ Task processing

//Time complexity
//Should be CONSTANT for Adding and Removing=> O(1)
//Searching and Accessing => O(N)

//QUEUE using ARRAY
class Queue{
    constructor(){
        this.data = [];
    }

    size(){
        return this.data.length;
    }

    //Add to the end of the list
    add(data){
        this.data.push(data);    //time complexity of 1
    }

    //Remove the first element: it is always the Index 0 elements
    //Use array method shift
    remove(){
        return this.data.shift();   //time complexity of N
    }
}

module.exports = Queue;