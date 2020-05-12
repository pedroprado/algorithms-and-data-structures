//STACK using Linked List
//REMENBER:
//Removing and Adding to a Stack SHOULD BE CONSTANT TIME (O(1))!!!
//So, using singly linked list, the PUSH and POP operations should be at the BEGGINING (using SHIFT and UNSHIFT - POP could have O(N) complexity)!!


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;     //HEAD
        this.last = null;      //TAIL
        this.size = 0;
    }

    //This is the same as UNSHIFT operation: adding to the HEAD (First)
    push(data){
        const newNode = new Node(data);
        if(this.size === 0){
            this.first = this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }

    //This the same as SHIFT operation: removing from the HEAD (first)
    pop(){
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

module.exports = Stack;