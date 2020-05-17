

//Data Structure that works like a QUEUE, but it is not FIFO
//In a Priority Queue, each element has a PRIORITY
//The order of the elements that come out is: HIGHER PRIORITY FIRST

//Implementation can use:Arrays, Linked Lists, Binary Heap

//1.Using Linkded List: we have to iterate all the list to find the HIGHEST PRIORITY, every time!
//2.Using Binary Head is better: the first element to come out is ALWAYS the HIGHEST ELEMENT

class PriorityItem{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(items){
        this.items = items;
    }

    //Same as INSERT in Binary  Heap
    //Insert an Item to the Priority Queue: Bubble UP it using the priority property of the Item!
    enqueue(data, priority){
        const new_item = new PriorityItem(data, priority);
        this.items.push(new_item);

        let newItemIndex = this.items.length - 1;

        //BUBBLE UP
        while(true){
            const newItem = this.items[newItemIndex];
            if(newItemIndex > 0){
                const parentIndex = Math.floor((newItemIndex-1)/2);
                const parent = this.items[parentIndex];
                if(newItem.priority > parent.priority){
                    this.items[parentIndex] = newItem;
                    this.items[newItemIndex] = parent;
                    newItemIndex = parentIndex;
                }else{
                    break;
                }
            }else{
                break;
            }
        }
        return this;
    }


    //Same as Extract Max of Binary Heap
    //Remove the element with HIGHEST PRIORITY: Bubble Down element with lowest priority after removal
    dequeue(){
        const max_priority = this.items[0];
        this.items[0] = this.items[this.items.length-1];
        this.items.pop();
        let elemIndex = 0;

        //BUBBLE DOWN
        while(true){
            const element = this.items[elemIndex];
            const leftIndex = 2*elemIndex+1;
            const rightIndex = 2*elemIndex+2;

            const hasNoChildren = leftIndex >= this.items.length;
            const hasOnlyLeftChildren = !hasNoChildren && rightIndex >= this.items.length;

            if(hasNoChildren){ 
                break;
            }else if(hasOnlyLeftChildren){
                const leftChild = this.items[leftIndex];
                if(element.priority < leftChild.priority){
                    this.items[leftIndex] = element;
                    this.items[elemIndex] = leftChild;
                    elemIndex = leftIndex;
                }else{
                    break;
                }
            }
            else{
                const leftChild = this.items[leftIndex];
                const rightChild = this.items[rightIndex];
                if(element.priority < leftChild.priority && element.priority < rightChild.priority){
                    if(leftChild.priority >= rightChild.priority){
                        this.items[leftIndex] = element;
                        this.items[elemIndex] = leftChild;
                        elemIndex = leftIndex;
                    }
                    if(rightChild.priority > leftChild.priority){
                        this.items[rightIndex] = element;
                        this.items[elemIndex] = rightChild;
                        elemIndex = rightIndex;
                    }
                }else{
                    if(element.priority < leftChild.priority){
                        this.items[leftIndex] = element;
                        this.items[elemIndex] = leftChild;
                        elemIndex = leftIndex;
                    }else if(element.priority < rightChild.priority){
                        this.items[rightIndex] = element;
                        this.items[elemIndex] = rightChild;
                        elemIndex = rightIndex;
                    }else{
                        break;
                    }
                }
            }  
        }

        return max_priority;

    }
}

//TIME COMPLEXITY: Same as Binary Heaps
//INSERTION: Log N => Inserting is a PUSH OPERATION IN AN ARRAY (which is O(1)). The Bubble UP is Log n
//DELETION: Log N => Removing is a POP OPERATION IN AN ARRAY (which is O(1) ). The Bubble DOWN is Log n
//SEARCHING: N  (There is no guaranted order between siblings!)

module.exports = {PriorityItem, PriorityQueue};