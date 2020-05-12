
//STACK is a collection of data
//LIFO: Last In First Out: the LAST thing to be inserted is the FIRST to be removed fro mthe stack

//Where Stack is used?
//1.Managing functions invocations: StackTrace
//2.Undo/Redo
//3.History object from the browser!


//STACK is a CONCEPT. There are several ways to implement it.
//TIME COMPLEXITY:
//Removing and Adding to a Stack SHOULD BE CONSTANT TIME (O(1))
//Searching and Accessing = O(N) (there is no index)

//STACK using built-in Arrays
//Remenber: in a built-in array, adding and removing to the start of the array is bad, because the array needs to reindex every item (O(N) complexity)!
//So, using ARRAY, PUSH and POP operations should be at the END (using built in push and pop methods!!
class Stack{
    constructor(){
        this.data = [];
    }

    size(){
        return this.data.length;
    }
 
    push(data){
        this.data.push(data);
    }

    pop(){
        return this.data.pop();
    }

    tail(){
        if( this.data.length === 0) return null;
        return this.data.length - 1;
    }

   
}

 

module.exports = Stack;