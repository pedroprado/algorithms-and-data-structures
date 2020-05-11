
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null
    }
}


//The Structure that contains the operations to deal with the List
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    //PUSH: insert element to the end (TAIL) of the list
    //PSEUDOCODE
    //1.Create a new node
    //2.Make current tail next points to this node 
    //3.Make the new node prev points to the tail 
    //4.Move the tail to the new node
    //5.Increment length
    //Edge cases:
    //Empty list: If the list is empty, make tail=head=new node
    push(data){
        const newNode = new Node(data);
        if(this.length === 0) this.tail = this.head = newNode;
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    //POP: remove element from the TAIL => 
    //(POP is faster for doubly linked list, because we dont need to traverse the list searching for the element before the tail)

    //PSEUDOCODE
    //1.Make a point to the tail (poped)
    //2.Move the tail to previous element (Make the tail to be the prev (poped.prev))
    //3.Make poped prev to be null, and tail next to be null
    //4.Decrement the length and return poped
    //Edge cases:
    //Empty list: If the list is empty, return undefined
    //Single element list: If the list has one item, return that item (which is the head = tail)
    pop(){
        if(this.length !== 0) {
            const poped = this.tail;

            if(this.length === 1){
                this.tail = null;
                this.head = null;
            }else{
                this.tail = poped.prev;
                poped.prev = null;
                this.tail.next = null;
            }
            
            this.length --;
            return poped;
        }
        return undefined;
    }

    //SHIFT: Remove an element from the beginning (HEAD) of the list
    //PSEUDOCODE
    //1.Make a pointer the the head (shifted)
    //2.Move the head to the next element (head.next)
    //3.Make the shifted element next to be null, and the head previous to be null
    //4.Decrement the length
    //5.Return the shifted
    //Edge cases:
    //Empty List: return undefined
    //Single element list: return that element and make head = tail = null
    shift(){
        if( this.length !== 0){
            const shifted = this.head;

            if(this.length === 1){
                this.head = null;
                this.tail = null;
            }else{
                this.head = shifted.next;
                shifted.next = null;
                this.head.prev = null;
            }

            this.length--;
            return shifted;
        }
        return undefined;
    }

    //UNSHIFT: insert and element to the beginning (HEAD) of the list
    
    unshift(data){

    }
}

module.exports = DoublyLinkedList;