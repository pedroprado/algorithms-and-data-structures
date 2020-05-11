const DoublyLinkedList = require('./doubly_linked_list');

describe('Doubly Linked List tests', () => {
    describe('Push operation: should insert element to the TAIL', () => {
        it('should push to empty list', () =>{
            const list = new DoublyLinkedList();
            
            list.push("hello");

            expect(list.head).toBe(list.tail);
            expect(list.tail.data).toBe("hello");
            expect(list.length).toBe(1);
        });
        it('should push to list', () =>{
            const list = new DoublyLinkedList();
            
            list.push("hello");
            list.push(2);

            expect(list.tail.data).toBe(2);
            expect(list.length).toBe(2);
        });
    });
    describe('Pop operation: should remove element from the TAIL', () => {
        it('Should not pop from empty list: return undefined', () => {
            const list = new DoublyLinkedList();
            
            const poped = list.pop();

            expect(poped).toBe(undefined);
            expect(list.length).toBe(0);
        });
        it('Should pop from single element list, head and tail should be null', () => {
            const list = new DoublyLinkedList();
            list.push(2);
            
            const poped = list.pop();

            expect(list.tail).toBe(null);
            expect(list.head).toBe(null);
            expect(poped.data).toBe(2);
            expect(list.length).toBe(0);
        });
        it('Should pop element from list: should return the TAIL', () => {
            const list = new DoublyLinkedList();
            list.push(2);
            list.push('hello');
            
            const poped = list.pop();

            expect(poped.data).toBe('hello');
            expect(list.length).toBe(1);
        });
    });
    describe('Shift operation: should remove element from the HEAD', () => {
        it('Should not shift from empty list: return undefined', () => {
            const list = new DoublyLinkedList();

            const shifted = list.shift();

            expect(shifted).toBe(undefined);
            expect(list.length).toBe(0);
        });
        it('Should shift from single element list: head and tail should be null', () => {
            const list = new DoublyLinkedList();
            list.push(200);

            const shifted = list.shift();

            expect(list.tail).toBe(null);
            expect(list.head).toBe(null);
            expect(shifted.data).toBe(200);
            expect(list.length).toBe(0);
        });
        it('Should shift element from list: should return the HEAD', () => {
            const list = new DoublyLinkedList();
            list.push(200);
            list.push('holla');
            list.push('oi');

            const shifted = list.shift();

            expect(list.head.prev).toBe(null);
            expect(shifted.data).toBe(200);
            expect(list.length).toBe(2);
        });
    });
   
});
