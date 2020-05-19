

//Algorithms that traverse a tree looking for some value: it should visit all the nodes

//Used for Trees that are not sorted (sorte tress can use binary search tree!)
 
//BFS  ->> USES QUEUE
//BREADTH FIRST SEARCH  (Busca em Largura)
//Search horizontally
//Visits all the nodes in a given level, before going to the next level

//PSEUDO CODE 
//1.Create a queue that stores the elements to be visited             (queue)
//2.Create a list that stores the elements that were already visited (visited)
//3.Start adding the root node to queue;
//4.ITERATION
// a.Remove the first element from QUEUE and add it to VISITED (root node in the first iteration)
// b.Check if there are children of the removed element. If there are children, add  them to the QUEUE;
//5.Repeat ITERATION till there is no element in QUEUE
//6.Return visited
const breadthFirstSearch = tree => {
    const root = tree.root;
    const queue = [];
    const visited = [];

    queue.push(root);

    while(queue.length !== 0){
        const node = queue.shift();
        visited.push(node.data);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return visited;
};


//DFS   -->USUES STACK
//DEPTH FIRST SEARCH (Busca em Profundidade)
//Search vertically
//Visit all the nodes to the left, before to look to the right

//PREORDER: Visit the PARENT FIRST, THEN its children (parent, left, right)

//PSEUDO COODE
//1.Create a variable to store the tree root  (root)
//2.Create a variable to store the visited nodes (visited)
//3.Use recursive function:
//a.recursive function that pushes a node to the VISITED 
//b.call itself to te left (if there is left node) and to the right (if there is a right node)
//4.Call the recursive function with root
//5.Return visited
const depthFirstSearchPreOrder = tree => {
    const root = tree.root;
    const visited = [];

    function traverse(node){
        visited.push(node.data);

        if(node.left) traverse(node.left);

        if(node.right) traverse(node.right);

        return;
    }

    traverse(root);

    return visited;

};

//POSTORDER: Visit the CHILDREN FIRST, THEN its PARENT (left, right, parent)

//PSEUDOCODE: similar than the PREODER-> the only different step is the push to the VISITED data, which happens AFTER checking the children nodes (left and rigth)
//1.Create a variable to store the tree root  (root)
//2.Create a variable to store the visited nodes (visited)
//3.Use recursive function:
//a.call itself to te left (if there is left node) and to the right (if there is a right node)    <<<<<<<<<<<<<<< swapped order
//b.recursive function that pushes a node to the VISITED                                          <<<<<<<<<<<<<<< swapped order
//4.Call the recursive function with root
//5.Return visited

const depthFirstSearchPostOrder = tree => {
    const root = tree.root;
    const visited = [];

    function traverse(node){
        if(node.left) traverse(node.left);

        if(node.right) traverse(node.right);

        visited.push(node.data);

        return;
    }

    traverse(root);

    return visited;

};

//INORDER: Visited item in the order they were visited (left, parent, right)
const depthFirstSearchInOrder = tree => {
    const root = tree.root;
    const visited = [];

    function traverse(node){
        if(node.left) traverse(node.left);

        visited.push(node.data);

        if(node.right) traverse(node.right);

        return;
    }

    traverse(root);

    return visited;
};


//BFS X DFS  : Time and Space Complexity

//Time Complexity if the same = O(n)

//Space Complexity:
//1.WIDE TREES: Tree has a lot of branches:
// BFS: has to store all the nodes yet to be visited, so it grows to O(n)
// DFS: only has to keep track of the Nodes in a given brach = O(size of the greatest branch)
//2.LONG TREES: Tree has few, but long branches:
// BFS: has to store all the few nodes yet to be visited :  O(1)  .... O(max number of branches) 
// DFS: only has to keep track of the Nodes in a given brach :  O(size of the greatest branch)

module.exports = {breadthFirstSearch, depthFirstSearchPreOrder, depthFirstSearchPostOrder, depthFirstSearchInOrder}

