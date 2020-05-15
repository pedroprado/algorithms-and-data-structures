const Tree = require('./tree_traversal');
const BST = require('../BinarySearchTrees/binary_search_tree');

describe('Breadth first search tests', () => {

//          tree
//           10
//        6       12
//     3    7   11    13 
    const tree = new BST();
    tree.insert(10);
    tree.insert(6);
    tree.insert(12);
    tree.insert(3);
    tree.insert(7);
    tree.insert(11);
    tree.insert(13);

    it('should search in width', ()=> {
        const expected = [10,6,12,3,7,11,13];

        const actual = Tree.breadthFirstSearch(tree);

        expect(expected).toStrictEqual(actual);
    });
});

describe('Depth first search tests', () => {
    
});