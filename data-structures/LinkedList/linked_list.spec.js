const LinkedList = require('./linked_list');

describe('Linked List tests', () => {
    describe('Push operation: should insert to the end (tail) of the list', () => {
        it('Push to new list: head sould be equals tail', () =>{
            const list = new LinkedList();
            
            list.push("hello");
    
            expect(list.head).toBe(list.tail);
            expect(list.length).toBe(1);
        });
        it('Push to list: tail should be the new node', () =>{
            const list = new LinkedList();
            
            list.push("hello");
            list.push("Hi there");
    
            expect(list.tail.data).toBe("Hi there");
            expect(list.length).toBe(2);
        });
    });

    describe('Pop operation: should remove from the end (tail) of the list', () => {
        it('Pop from empty list: should return undefined', () => {
            const list = new LinkedList();
    
            const poped = list.pop();

            expect(poped).toBe(undefined);
        });
        it('Pop from single element list: should return tail and empty list', () => {
            const list = new LinkedList();
            list.push('holla');
    
            const poped = list.pop();

            expect(poped.data).toBe('holla');
            expect(list.tail).toBe(null);
            expect(list.head).toBe(null);
            expect(list.length).toBe(0);
        });
        it('Pop: should return tail and decremented list', () => {
            const list = new LinkedList();
            list.push('hello');
            list.push('holla');
            list.push('?');
    
            const poped = list.pop();

            expect(poped.data).toBe('?');
            expect(list.tail.data).toBe('holla');
            expect(list.length).toBe(2);
        });
    });
    describe('Shift operation: should remove elmenent from the start (HEAD) of the list', () => {
        it('Shift from empty list: should return undefined', () => {
            const list = new LinkedList();

            const shifted = list.shift();

            expect(shifted).toBe(undefined);
        });
        it('Shift from single element list: tail should be null', () => {
            const list = new LinkedList();
            list.push('hello');

            const shifted = list.shift();

            expect(shifted.data).toBe('hello');
            expect(list.head).toBe(null);
            expect(list.tail).toBe(null);
            expect(list.length).toBe(0);
        });
        it('Shift from not empty list: should return value and decrement length', () => {
            const list = new LinkedList();
            list.push("hello");
            list.push("Hi there");

            const shifted = list.shift();

            expect(shifted.data).toBe('hello');
            expect(list.head.data).toBe('Hi there');
            expect(list.length).toBe(1);
        });
    });
    describe('Unshift operation: should insert element to the beginning (HEAD) of the list', () => {
        it('Unshift empty list: head and tail should be the same', () => {
            const list = new LinkedList();

            list.unshift('hello');

            expect(list.head.data).toBe('hello');
            expect(list.tail.data).toBe('hello');
            expect(list.length).toBe(1);
        });
        it('Unshift not empty list: head and tail should be the same', () => {
            const list = new LinkedList();
            list.push('hello');

            list.unshift('holla');

            expect(list.head.data).toBe('holla');
            expect(list.tail.data).toBe('hello');
            expect(list.tail.next).toBe(null);
            expect(list.length).toBe(2);
        });
    });
    describe('Get operation: should return and element of the list given an index', () =>{
        it('Get negative index: should return null', () => {
            const list = new LinkedList();
            list.push('hello');
            list.push('holla');
            list.push('hi');
            list.push(100);
            
            const node = list.get(-1);

            expect(node).toBe(null);
        });
        it('Get invalid index: should return null', () => {
            const list = new LinkedList();
            list.push('hello');
            list.push('holla');
            list.push('hi');
            list.push(100);
            
            const node = list.get(4);

            expect(node).toBe(null);
        });
        it('Get valid index: should return element from position', () => {
            const list = new LinkedList();
            list.push('hello');  //index 0
            list.push('holla');  //index 1
            list.push('hi');     //index 2
            list.push(100);      //index 3
            
            const node = list.get(2);
            const node2 = list.get(3);

            expect(node.data).toBe('hi');
            expect(node2.data).toBe(100);
        });     
    });
    describe('Set operation: should update one desired Node', () => {
        it('Set to non existing node (invalid index): should return false', () => {
            const list = new LinkedList();
            list.push(1); 
            list.push(2);

            const setted =  list.set(3, 5);

            expect(setted).toBe(false);
            console.log(list.length)
        });
        it('Set to a existing node (valid index): should return true', () => {
            const list = new LinkedList();
            list.push(1); 
            list.push(2);

            const setted =  list.set(1, 5);

            expect(setted).toBe(true);
            expect(list.head.next.data).toBe(5);
        });
    });
    describe('Insert operation', () => {
        it('should return false for an invalid index, less than 0', () =>{
            const list = new LinkedList();
            list.push(1);  //head
            list.push(2);
            list.push(3);
            list.push(100);  //tail

            const inserted = list.insert(-1, 'Hello');

            expect(inserted).toBe(false);
        });
        it('should return false for an invalid index, greater than length', () =>{
            const list = new LinkedList();
            list.push(1);  //head
            list.push(2);
            list.push(3);
            list.push(100);  //tail

            const inserted = list.insert(5, 'Hello');

            expect(inserted).toBe(false);
            expect(list.length).toBe(4);
        });
        it('should insert in the head, return true', () =>{
            const list = new LinkedList();
            list.push(1);  //head, index 0
            list.push(2);
            list.push(3);
            list.push(100);  //tail

            const inserted = list.insert(0, 'Hello');

            expect(inserted).toBe(true);
            expect(list.head.data).toBe('Hello');
            expect(list.length).toBe(5);
        });
        it('should insert in the tail, return true', () =>{
            const list = new LinkedList();
            list.push(1);  //head
            list.push(2);
            list.push(3);
            list.push(4);
            list.push(100);  //tail, index 4

            const inserted = list.insert(5, 'Hello');

            expect(inserted).toBe(true);
            expect(list.tail.data).toBe('Hello');
            expect(list.length).toBe(6);
        });
        it('should insert in a given valid index, return true', () =>{
            const list = new LinkedList();
            list.push(1);  //head
            list.push(3);  //index 1
            list.push(100);  //tail

            const inserted = list.insert(1, 'Hello');

            expect(inserted).toBe(true);
            expect(list.head.next.data).toBe('Hello');
            expect(list.length).toBe(4);
        });
    });
    describe('Remove operation', () => {
        it('should not remove for invalid index, index less than 0', ()=> {
            const list = new LinkedList();
            list.push(1);  //head
            list.push(2);
            list.push(3);
            list.push(4);
            list.push(100);  //tail, index 4

            const removed = list.remove(-1);

            expect(removed).toBe(undefined);
            expect(list.length).toBe(5);
        });
        it('should not remove for invalid index, index >= length', ()=> {
            const list = new LinkedList();
            list.push(1);  //head
            list.push(2);
            list.push(100);  //tail, index 2

            const removed = list.remove(3);
            const removed2 = list.remove(4);

            expect(removed).toBe(undefined);
            expect(removed2).toBe(undefined);
            expect(list.length).toBe(3);
        });
        it('should remove head, index 0', ()=> {
            const list = new LinkedList();
            list.push(1);  //head, index 0
            list.push(2);
            list.push(3);
            list.push(4);
            list.push(100);  //tail, index 4

            const removed = list.remove(0);

            expect(removed.data).toBe(1);
            expect(list.length).toBe(4);
            expect(list.head.data).toBe(2);
        });
        it('should remove tail for index length-1', ()=> {
            const list = new LinkedList();
            list.push(1);  //head, index 0
            list.push(2);
            list.push(3);
            list.push(99);
            list.push(100);  //tail, index 4

            const removed = list.remove(4);

            expect(removed.data).toBe(100);
            expect(list.length).toBe(4);
            expect(list.tail.data).toBe(99);
        });
        it('should remove element for a given valid index', ()=> {
            const list = new LinkedList();
            list.push(1);  //head, index 0
            list.push(2);
            list.push('holla');   //index 2
            list.push(100);  //tail, index 3

            const removed = list.remove(2);

            expect(removed.data).toBe('holla');
            expect(list.length).toBe(3);
            expect(list.head.next.next.data).toBe(100);
        });
    });
    describe('Reverse operation: should reverse the linked list direction', () => {
        it('Should reverse', () => {
            const list = new LinkedList();
            list.push(1);  //head
            list.push(2);
            list.push(3);
            list.push(100);  //tail

            const reversed = list.reverse();

            expect(reversed.head.data).toBe(100);
            expect(reversed.head.next.data).toBe(3);
            expect(reversed.head.next.next.data).toBe(2);
            expect(reversed.tail.data).toBe(1);
        });
        it('Should reverse 2', () => {
            const list = new LinkedList();
            list.push(1);  //head
            list.push(100);  //tail

            const reversed = list.reverse();

            expect(reversed.head.data).toBe(100);
            expect(reversed.head.next.data).toBe(1);
            expect(reversed.tail.data).toBe(1);
        });
    });
});