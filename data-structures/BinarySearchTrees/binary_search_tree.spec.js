const BST = require('./binary_search_tree');

//desired tree
//           10
//        6       12
//     3    7   11    13 

describe('Binary Search Tree tests', () =>{
    const b_tree = new BST();
        b_tree.insert(10);
        b_tree.insert(6);
        b_tree.insert(12);
        b_tree.insert(3);
        b_tree.insert(7);
        b_tree.insert(11);
        b_tree.insert(13);

    describe('Insert Operation', () => {
        it('should insert to empty tree', () => {
            const bst = new BST();
           
            const tree = bst.insert(10);

            expect(tree.root.data).toBe(10);
        });
        it('should insert to the left', () => {
            const bst = new BST();
            bst.insert(10);
 
            const tree =  bst.insert(8);
 
            expect(tree.root.left.data).toBe(8);
        });
        it('should insert to the rigth', () => {
            const bst = new BST();
            bst.insert(10);

            const tree = bst.insert(12);

            expect(tree.root.right.data).toBe(12);
        });
        it('should not insert already inserted value', () => {
            const bst = new BST();
            bst.insert(10);

            const tree = bst.insert(10);

            expect(tree).toBe(undefined);
        });
    });
    describe('Find Operation', () => {
        it('should not find for empty tree', () => {
            const bst = new BST();

            const found = bst.find(10);

            expect(found).toBe(null);
        });
        it('should find root node', () => {
            const root = b_tree.find(10);
            
            expect(root.data).toBe(10);
            expect(root.left.data).toBe(6);
            expect(root.right.data).toBe(12);
        });
        it('should find node', () => {
            const node = b_tree.find(13);
            
            expect(node.data).toBe(13);
            expect(node.left).toBe(null);
            expect(node.right).toBe(null);
        });
    });
});