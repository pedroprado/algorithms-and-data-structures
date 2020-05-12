//QUEUE implementation using Linked List


//Queue should have constant time for Adding and Removing
//Thus, the better approach is to use:
//Add to the END (PUSH)
//Remove from the beggining (SHIFT)

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //ADD to the END : PUSH OPERATION
    add(data){
        const new_node = new Node(data);
        if(this.size === 0){
            this.first = this.last = new_node;
        }else{
            this.last.next = new_node;
            this.last = new_node; 
        }
        this.size++;
        return this;
    }

    //REMOVE from the BEGINING = SHIFT OPERATION
    remove(){
        if( this.size !== 0){
            let poped = this.first;
            if( this.size === 1){
                this.first = null;
                this.last = null;
            }else{
                this.first = this.first.next;
                poped.next = null;
            }
            this.size--;
            return poped;
        }
        return null;
    }   
}

module.exports = Queue;

