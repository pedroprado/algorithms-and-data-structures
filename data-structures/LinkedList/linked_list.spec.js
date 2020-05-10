const LinkedList = require('./linked_list');
// import LinkedList from './linked_list';

describe('Linked List', () => {
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
        it('Set to non existing node: should return false', () => {

        });
    });
   

});