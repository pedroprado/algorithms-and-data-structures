
//TREES: 
//Data structures that consists of NODES, BRANCHES and CHILDREN

//List => linear
//Trees => not linear

//Singly Linked List is a special case of Tree: a Tree that has only one branch!


//RULES-----------------#########################-----------------------
//There is ONLY ONE ROOT NODE!
//Nodes can only point to its Children!
//Children cannot point to Parents or Siblings!


//TERMINLOGY-----------------#########################-----------------------
//Root: Top Node
//Parent: Node that connects to other nodes that are moving away from the Root
//Children: Node that connect to other Node (only ONE!) closer to the Root
//Siblings: Nodes that have the same Parent
//Leaf: Node with no Children
//Edge: The connection between two nodes


//APPLICATIONS
//HTML DOM
//Network Routing
//Artificial Intelligence - Min Max Tree
//Folders in OS's
//FileSystem


//BINARY TREE (BT)----------------------------------------------------------------
//Parent Nodes have AT MOST two Children!

//BINARY SEARCH TREE (BST)---------------------------------------------------------
//Data is kept in sorted order!
//Parent Nodes: children greater than te Parent Node go to the right; children less than the Parent go to the left


//Searching in a Binary Search Trees
//Look to the Node, check if the given value is > or < than that Node's value, move to the left or the right

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    //INSERT:
    //1.Check if there is a root
    //2.if there is a root, check if the new node goes to the right (> root) or to the left (< root)
    //3.After checking, check if the moving place has a child node (if there is not a child node, that is the place of the new node)
    //4.If there is a child node, repeat from step 2
    insert(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(data === current.data) return undefined;
                if(data < current.data){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
                if(data > current.data){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }   
    }


    //FIND: search and return a value of the Tree
    //1.Check if there is a root, if not, return null
    //2.IF there is, check the value of root, it is the value searched, return it
    //3.If it is not, check is the value searched is > or < the root, and move to the right or the left
    //4.Repeat the process till found the searched value
    //5.If never found, return null
    find(data){
        if(this.root !== null){
            let current = this.root;
            while(true){
                if(current === null){ 
                    return null;
                }else{
                    if(data === current.data){ 
                        return current;
                    }else if(data < current.data){
                        current = current.left;
                    }else{
                        current = current.right;
                    }
                }
            }
        }   
        return null;
    }

    //CONTAINS: check if some value is in the BST
    //The same as the FIND OPERATION, but returns true or false
    contains(data){
        if(this.root !== null){
            let current = this.root;
            while(true){
                if( current === null){ 
                    return false;
                }else{
                    if(data === current.data){ 
                        return true;
                    }else if(data < current.data){
                        current = current.left;
                    }else{
                        current = current.right;
                    }
                }
            }
        }   
        return false;
    }
   
}

//TIME COMPLEXITY:
//INSERTING : Log N    not guaranted
//SEARCHING: Log N     not guaranteds

//there are some configurations of the BST that could be considered a linked list.
//in those cases, the time complexity is N

module.exports = BinarySearchTree;