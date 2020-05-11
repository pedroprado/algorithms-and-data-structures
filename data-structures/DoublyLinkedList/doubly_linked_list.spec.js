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
    describe('Unshift operation: should insert and element to the HEAD', () => {
        it('Should unshift for empty list: head and tail should be the same', () => {
            const list = new DoublyLinkedList();

            list.unshift('hello');

            expect(list.head.data).toBe('hello');
            expect(list.tail.data).toBe('hello');
            expect(list.length).toBe(1);
        });
        it('Should unshift for a list: unshifted should be the head', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            list.unshift('newnode');

            expect(list.head.data).toBe('newnode');
            expect(list.length).toBe(3);
        });
    });
    describe('Get operation: should return the reference of a Node for a given index', () => {
        it('Should not get for invalid index, less than zero', () =>{
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const element = list.get(-1);
            
            expect(element).toBe(null);
        });
        it('Should not get for invalid index, equal to length', () =>{
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const element = list.get(2);
            
            expect(element).toBe(null);
        });
        it('Should not get for invalid index, greater than the length', () =>{
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const element = list.get(3);
            
            expect(element).toBe(null);
        });
        it('Should get HEAD', () =>{
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const element = list.get(0);
            
            expect(element.data).toBe('hello');
        });
        it('Should get TAIL', () =>{
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const element = list.get(3);

            expect(element.data).toBe(33);
        });
    });
    describe('Set operation: should change the data of a node, given its index', () => {
        it('Should not set for invalid index', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const setted = list.set(-1, 'data');
            const setted2 = list.set(3, 'data');

            expect(setted).toBe(false);
            expect(setted2).toBe(false);
        });
        it('Should set for valid index', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push(100);

            const setted = list.set(2, 'data');

            expect(setted).toBe(true);
            expect(list.tail.data).toBe('data');
        });
    });
    describe('Insert operation: should insert a new Node into the list, incrementing its length', () => {
        it('Should not insert, for invalid index less than zero', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const inserted = list.insert(-1, 'holla');

            expect(inserted).toBe(false);
            expect(list.length).toBe(4);
        });
        it('Should not insert, for invalid index greater then length', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const inserted = list.insert(5, 'holla');

            expect(inserted).toBe(false);
            expect(list.length).toBe(4);
        });
        it('Should insert to the HEAD', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const inserted = list.insert(0, 'holla');

            expect(inserted).toBe(true);
            expect(list.length).toBe(5);
            expect(list.head.data).toBe('holla');
        });
        it('Should insert to the TAIL', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const inserted = list.insert(list.length, 'holla');

            expect(inserted).toBe(true);
            expect(list.length).toBe(5);
            expect(list.tail.data).toBe('holla');
        });
        it('Should insert to index 1', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push('ola');
            list.push(33);

            const inserted = list.insert(1, 'holla');

            expect(inserted).toBe(true);
            expect(list.length).toBe(5);
            expect(list.head.next.data).toBe('holla');
        });
    });
    describe('Remove operation: should remove an element of the list and decrement its length', () => {
        it('Should not remove from invalid index, less than zero', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const removed = list.remove(-1);

            expect(removed).toBe(undefined);
            expect(list.length).toBe(2);
        });
        it('Should not remove from invalid index, greater or equal to length', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const removed = list.remove(2);
            const removed2 = list.remove(3);


            expect(removed).toBe(undefined);
            expect(removed2).toBe(undefined);
            expect(list.length).toBe(2);
        });
        it('Should not remove from the HEAD, index 0', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);

            const removed = list.remove(0);

            expect(removed.data).toBe('hello');
            expect(list.head.data).toBe(1);
            expect(list.length).toBe(1);
        });
        it('Should not remove from the TAIL, index length -1', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push(100);
            list.push(1199);

            const removed = list.remove(list.length-1);

            expect(removed.data).toBe(1199);
            expect(list.tail.data).toBe(100);
            expect(list.length).toBe(3);
        });
        it('Should not remove from valid index', () => {
            const list = new DoublyLinkedList();
            list.push('hello');
            list.push(1);
            list.push(100);   //index 2
            list.push(1199);

            const removed = list.remove(2);

            expect(removed.data).toBe(100);
            expect(removed.next).toBe(null);
            expect(removed.prev).toBe(null);
            expect(list.length).toBe(3);
        });
        
    });
   
});
