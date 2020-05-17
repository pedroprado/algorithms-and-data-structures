
//HEAPS: they are like binary search trees

//Rules:
//The PARENT NODE is GREATER THAN ITS CHILDREN
//Left child is added before the right child

//Used for: Priority Queues and Graph Traversal

//In a array:
//Findding CHILDREN INDEXes:
//For any Parent N, is left child is located ate 2n+1, and right child ate 2n+2
//Finding PARENT INDEXes:
//For any child in index N, its parent is at floor(N-1)/2


 
class BinaryHeap{
    constructor(values){
        this.values = values;
    }

    //INSERT: add to the END of the array (PUSH)
    //After adding the element to the end of the array, we have BUBBLE that value
    //BUBBLE UP: change the INSERTED VALUE with its PARENT, if value > parent. Repeat that, till the value is at the right position

    //PSEUDO CODE FOR BUBBLE UP
    //1.Find the pushed element index
    //2.Find the parent index (elemt index-1)/2
    //3.Compare the parent (Arry[parentIndex]) and element (array[index]): if the parent is greater, swap them
    //4.If swapped, Update the element index (now it is parentIndex)
    //5.Repeat 2 and 3
    //Edges:
    //Min parentIndex = 0
    insert(data){
        this.values.push(data);

        let elemIndex = this.values.length - 1;

        //BUBBLE UP
        while(true){
            const element = this.values[elemIndex];

            if(elemIndex > 0){
                const parentIndex = Math.floor((elemIndex-1)/2);
    
                const parent = this.values[parentIndex];
        
                if(element > parent){
                    this.values[parentIndex] = element;
                    this.values[elemIndex] = parent;
                    elemIndex = parentIndex;
                }else{
                    break;
                }
            }else{
                break;
            }
        }
        return this;
    }

    //Remove the root node (which is the MAX value)
    //PSEUDOCODE:
    //1.Swap the first element (index 0) and the last element (index length-1) of the array
    //2.Pop the last element (which is gonna be the ROOT) (save the poped item!)
    //3.Bubble Down

    //BUBBLE DOWN: push the lower value down => find the correct spot of the new element of ROOT, comparing it with its children
    //1.Find the children => Children index => leff = 2n+1, right = 2n+2
    //2.Compare, if it less then a child, swap them, and move the pointer
    //3.Kepp comparing and swapping till there is no child or it is at the correct spot (root > any children)
    extractMax(){
        const max = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        let elemIndex = 0;
        
        //BUBBLE DOWN
        while(true){
            const element = this.values[elemIndex];
            const leftIndex = 2*elemIndex+1;
            const rightIndex = 2*elemIndex+2;

            const hasNoChildren = leftIndex >= this.values.length;
            const hasOnlyLeftChildren = !hasNoChildren && rightIndex >= this.values.length;

            if(hasNoChildren){ 
                break;
            }else if(hasOnlyLeftChildren){
                const leftChild = this.values[2*elemIndex + 1];
                if(element < leftChild){
                    this.values[leftIndex] = element;
                    this.values[elemIndex] = leftChild;
                    elemIndex = 2*elemIndex+1;
                }else{
                    break;
                }
            }
            else{
                const leftChild = this.values[2*elemIndex + 1];
                const rightChild = this.values[2*elemIndex + 2];
                if(element < leftChild && element < rightChild){
                    if(leftChild >= rightChild){
                        this.values[2*elemIndex+1] = element;
                        this.values[elemIndex] = leftChild;
                        elemIndex = 2*elemIndex+1;
                    }
                    if(rightChild > leftChild){
                        this.values[2*elemIndex+2] = element;
                        this.values[elemIndex] = rightChild;
                        elemIndex = 2*elemIndex+2;
                    }
                }else{
                    if(element < leftChild){
                        this.values[2*elemIndex+1] = element;
                        this.values[elemIndex] = leftChild;
                        elemIndex = 2*elemIndex+1;
                    }else if(element < rightChild){
                        this.values[2*elemIndex+2] = element;
                        this.values[elemIndex] = rightChild;
                        elemIndex = 2*elemIndex+2;
                    }else{
                        break;
                    }
                }
            }  
        }

        return max;

    }
}

module.exports = BinaryHeap;