const LinkedList = require('./linked_list');

const linked_list = new LinkedList();

describe('Linked List', () => {
    it('Push', () =>{
        let list = new LinkedList();
        list.pushToEnd("hello");

        console.log(list);
        expect(true).toBe(true);
    });
});