
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
        return this;
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
    //PSEUDOCODE
    //1.Create a new node
    //2.Make the new node point next to the head
    //3.Make the head prev to point to the new node
    //4.Make the head be the new node
    //5.Increment the length
    //Edge cases:
    //Empty list: the head and the tail should be the new node
    unshift(data){
        const newNode = new Node(data);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //GET: get the reference of a Node in a certain position (given its index)
    //PSEUDOCODE
    //1.Check if the given index is less than the length/2, or greater   ##REMEMBER HEAD IS THE INDEX=0!
    //2.If it is less, start the search from the head   (the element is closer to the HEAD)
    //3.If it is more, start the search from the tail   (the elementi s closer to the TAIL)
    //4.Loop through the list to find the element and return it (its reference)
    //Edge cases:
    //Invalid index: do not search for index < 0 or >= length
    get(index){
        const half = Math.floor(this.length/2);

        if( index >=0 && index < this.length){
            if( index <=  half ){
                let start = this.head;
                for(let i = 0; i < index; i++){
                    start = start.next;
                }
                return start;
            }else{
                let end = this.tail;
                for(let j = this.length-1; j>index; j--){
                    end = end.prev;
                }
                return end;
            }
        }
        return null;
    }

    //SET: set new data to a node, given its index
    //PSEUDOCODE
    //1.Find the reference for the desired node (using GET)
    //2.Change de data
    //3.Return true if changed, false in case there is no node (GET return null, invalid index)
    set(index, data){
        const node = this.get(index);
        if( node !== null){
            node.data = data;
            return true;
        }
        return false;
    }

    //INSERT: insert a new node in a given index, incrementing the list length
    //PSEUDOCODE
    //EDGE CASES:
    //Inserting in a invalid index should return false (index < 0 or index > length)
    //Inserting in the index 0 is adding to the HEAD = UNSHIFT
    //Inserting in the index LENGTH is adding to the TAIL = PUSH
    //Else:
    //1.Find the previous node with GET, using index -1
    //2.Point the new node next to the previous next
    //3.Point the new node prev to previous
    //4.Point previous next prev to the new node
    //5.Point previos next to the new node
    //6.Increment the length and return true
    insert(index, data){
        if(index >= 0 && index <= this.length ){
            if(index === 0) this.unshift(data);
            else if(index === this.length) this.push(data);
            else{
                const newNode = new Node(data);
                const prevNode = this.get(index-1);
                const nextNode = prevNode.next;

                newNode.prev = prevNode;
                prevNode.next = newNode;

                newNode.next = nextNode;
                nextNode.prev = nextNode
                this.length++;
            }
            return true;
        }
        return false;
    }

    //REMOVE: remove an element of the list and decrement its length
    //PSEUDOCODE
    //EDGE CASES:
    //Invalid index: index < 0 or index >= length
    //Index of HEAD (0) : shift
    //Index of TAIL (length-1): pop
    //Else:
    //1.Usig get to retrive the item to be removed
    //2.Make a pointer to removed prev (prev)
    //3.Make a pointer to remove next (next)
    //4.Make prev next points to next
    //5.Make next prev points to prev
    //6.Decrement length
    //7.Return the removed (set its next and prev  props to null)
    remove(index){
        if(index >= 0 && index < this.length){
            let removed;
            if(index === 0 ) removed = this.shift();
            else if(index === this.length-1) removed = this.pop();
            else{
                removed = this.get(index);
                const prev = removed.prev;
                const next = removed.next;

                prev.next = next;
                next.prev = prev;

                removed.next = null;
                removed.prev = null;

                this.length--;
            }
            return removed;
        }
        return undefined;
    }
}

//Time Complexity:
//                Insetion         Removal  
//beginning      1 (unshift)     1 (shift)      
//end            1 (push)        1 (pop)       

//Searching and Accessing = O(N)   (Technically is N/2  because the two direction searc)
//Linked lists are not good for searching, because they are not indexed! So, no random access!

//Space Consume
//More memory! Need to store the PREV pointer for each Node

module.exports = DoublyLinkedList;