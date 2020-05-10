//Linked list: they are data structures that have Value and a pointer for the next NODE's


//NODE: the structure of the LinkedList that stores the DATA and THE POINT tho the next node
//A linked List has: pointers the the HEAD and TAIL

//HEAD: the beginning of the list
//TAIL: the end of the list

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


//The Structure that contains the operations to deal with the List
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    //Add data to the end (TAIL) of the list: PUSH
    //If the list is empty we set the head ant the tail: HEAD == TAIL == NEW NODE
    //If it is not empty (it already has a tail), the element is pushed to the TAIL
    //For setting the element to the TAIL: set the next prop of the Tail to reference to the newly created Node
    //Increment the length
    pushToEnd(data){
        const new_node = new Node(data);
        if(this.length === 0){
            this.head = this.tail = new_node;
        }else{
            this.tail.next = new_node;
            this.tail = new_node; 
        }
        this.length ++;
        return this;
    }

    //Remove data from the end (TAIL) of the list: POP
    //Search the list for the 2nd to last node (helper method: Traverse) (if there is no nodes, return undefined)
    //Set the 2nd to last node next prop to be null
    //Update the tail to point to the 2nd to last node
    //Decrement the list length by 1
    //Return the removed element
    pop(){
        if(this.length === 0 ) return undefined;

        let current = this.head;
        while(current.next.next !== null){
            current = current.next.next;
        }

        let poped = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return poped;
    }

    //SHIFTING: remove an element from the beginning (HEAD) ot he List
    //If there is no nodes, return undefined
    //Store the head in a variable, and set head to be the next (head.next)
    //Decrement the length
    //Return the removed value
    shift(){

        if(this.length === 0) return undefined;

        let current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        } 

        return current;
    }
}

module.exports = LinkedList;