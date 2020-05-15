const traverse = require('./tree_traversal');
const BST = require('../../data-structures/BinarySearchTrees/binary_search_tree');

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

describe('Breadth first search tests', () => {
    it('should search in width', ( )=> {
        const expected = [10,6,12,3,7,11,13];

        const actual = traverse.breadthFirstSearch(tree);

        expect(actual).toStrictEqual(expected);
    });
});

describe('Depth first search tests', () => {
    it('should search in PRE ORDER', ( )=> {
        const expected = [10,6,3,7,12,11,13];

        const actual = traverse.depthFirstSearchPreOrder(tree);

        expect(actual).toStrictEqual(expected);
    });
    it('should search in POST ORDER', ( )=> {
        const expected = [3,7,6,11,13,12,10];

        const actual = traverse.depthFirstSearchPostOrder(tree);

        expect(actual).toStrictEqual(expected);
    });
    it('should search in IN ORDER', ( )=> {
        const expected = [3,6,7,10,11,12,13];

        const actual = traverse.depthFirstSearchInOrder(tree);

        expect(actual).toStrictEqual(expected);
    });
});