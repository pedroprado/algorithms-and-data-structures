

//Algorithms that traverse a tree looking for some value: it should visit all the nodes

//Used for Trees that are not sorted (sorte tress can use binary search tree!)

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

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

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



//DEPTH FIRST SEARCH (Busca em Profundidade)
//Search vertically
//Visit all the nodes to the left, before to look to the right

//PSEUDO COODE
//1.Create a variable to store the tree root  (root)
//2.Create a variable to store the visited nodes (visited)
//3.Use recursive function:
//a.recursive function that pushed a node to the VISITED 
//b.call itself to te left (if there is left node) and to the right (if there is a right node)
//4.Call the recursive function with root
//5.Return visited
const depthFirstSearch = tree => {

};

module.exports = {breadthFirstSearch, depthFirstSearch}

