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

    //PUSH:Add data to the end (TAIL) of the list
    //If the list is empty we set the head ant the tail: HEAD == TAIL == NEW NODE
    //If it is not empty (it already has a tail), the element is pushed to the TAIL
    //For setting the element to the TAIL: set the next prop of the Tail to reference to the newly created Node
    //Increment the length
    push(data){
        const new_node = new Node(data);
        if(this.length === 0){
            this.head = this.tail = new_node;
        }else{
            this.tail.next = new_node;
            this.tail = new_node; 
        }
        this.length++;
        return this;
    }

    //POP: Remove data from the end (TAIL) of the list
    //Search the list for the 2nd to last node (helper method: Traverse) (if there is no nodes, return undefined)
    //Set the 2nd to last node next prop to be null
    //Update the tail to point to the 2nd to last node
    //Decrement the list length by 1
    //Return the removed element
    pop(){
        let current = this.head;

        if(this.length !== 0 ){
            if(this.length === 1){
                this.head = null;
                this.tail = null;
                this.length --;
    
                return current;
            }
    
            while(current.next.next !== null){
                current = current.next;
            }
    
            let poped = current.next;
            current.next = null;
            this.tail = current;
            this.length--;
       
            return poped;
        }

        return undefined;
    }

    //SHIFTING: remove an element from the beginning (HEAD) ot the List
    //If there is no nodes, return undefined
    //Store the head in a variable, and set head to be the next (head.next)
    //Decrement the length
    //If the element was the only one (single element list), make the tail to be null
    //Return the removed value
    shift(){
        if(this.length !== 0){
            let current = this.head;
            this.head = this.head.next;
            current.next = null;
            this.length--;
            if(this.length === 0){
                this.tail = null;
            } 
    
            return current;
        } 
        return undefined;
    }

    //UNSHIFTING: add an element to the beginning (HEAD) of the list
    //If there is no head (empty list) set the head (and the tail) to the new node
    //Else, set the next prop of the newly created node to the current Head
    //Set the head to point to the newly created node
    //Increment the length
    //Return the list
    unshift(data){
        const new_node = new Node(data);

        if(this.length === 0) {
            this.head = new_node;
            this.tail = new_node;
        }else{
            new_node.next = this.head;
            this.head = new_node;
        }
        this.length++;
        return this;
    }

    //GET: given and index return the node (the reference!) from that position
    //Do not search if the index is less zero or greater than length of the list
    //Loop through the list to find the element of the given index, and return the element
    get(index){
        if(index >= 0 && index <= this.length-1){
            let current = this.head;
            for(var i = 0; i < index; i++){
                current = current.next;
            };
            return current;
        }
        return null;
       
    }

    //SET: set new Data to a desired Node, which is found by its index
    //Find the node using and index and the GET function
    //Update the data of that Node
    set(index, data){
        const node = this.get(index);
        if(node !== null) {
            node.data = data;
            return true;
        }
        return false;
    }

    //INSERT: insert a new node to the list. The new node should be inserted in a given index.
    //The function should receive a data and an index;
    //If the index < 0 or index > length, return false (did not insert)
    //If the index is the head index (0), just UNSHIFT the element
    //If the index is the tail+1 index (length), just PUSH the element
    //Otherwise, find the elements:
    //  1. of index position (GET(index)), and point the new node (new_node.next) to that element
    //  2. of the index-1 position (use GET(index-1)), and point that element to new_node
    //Return true
    insert(index, data){
        if(index >= 0 && index <= this.length){
            if(index === 0) this.unshift(data);
            else if(index === this.length) this.push(data);
            else{
                const newNode = new Node(data);
                const previousNode = this.get(index-1);
                newNode.next = previousNode.next;
                previousNode.next = newNode;
                this.length++;
            }    
            return true;
        }
        return false;
    }

    //REMOVE: removes a node from a specific position (index)
    //Given and index, find the item (node) to be removed (using GET function), in the index-1 (previous node)
    //Set pointer to that item.next (temp)
    //set the item.next to be the temp.next (== item.next.next)
    //Set the temp.next to null
    //Decrement the length;
    //Return temp
    //Edge cases:
    //If the index < 0 or index >= length, return undefined (we cannot remove and item from length index, there is no item!);
    //If index = length-1, pop the item (pop())
    //If index = head (index 0), shift the list (shift())
    remove(index){
        if( index >= 0 & index <= this.length-1){
            if(index === 0) return this.shift();
            else if(index === this.length-1) return this.pop();
            else{
                const previousNode = this.get(index-1);
                const removed = previousNode.next;
                previousNode.next = removed.next;
                removed.next = null;
                this.length--;
                return removed;
            }
        }
        return undefined;
    }

    //REVERSE: invert the linked list direction. Head becomes tail, tail becomes head.
    //Loop through the list, making each item next prop to be the last item
    //PSEUDOCORE:
    //Swap head and tail
    //Create a pointer called node that points to tail (this is the current node!)
    //Create a pointer called next, that points to node.next
    //Create a ponter called prev, that points to node's previous (it will be null in the 1st iteration), and move node = next (node.next)
    //Make node.next = prev
    //Make prev = node, node = next, next = next.next
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = node.next;
        let prev = null;

        for(let i=0; i<this.length; i++){
            if(next === null){
                node.next = prev;
                return this;
            }
            node.next = prev;
            prev = node;
            node = next;
            next = node.next;
        }
        return this;
    }
}


//Time Complexity:
//                Insetion         Removal  
//beginning      1 (unshift)     1 (shift)      
//end            1 (push)        1...N  (pop)       

//Searching and Accessing = O(N)
//Linked lists are not good for searching, because they are not indexed! So, no random access!

module.exports = LinkedList;