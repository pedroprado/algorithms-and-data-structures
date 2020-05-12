const Stack = require('./stack');

describe('Stack tests', () =>{
    describe('Create stack', () =>{
        it('should instance and empty stack', () => {
            const stack = new Stack();

            expect(stack.size()).toBe(0);
        });
    })
    describe('Push operation', () => {
        it('should push item to stack', () => {
            const stack = new Stack();

            stack.push(1);
            stack.push('hello');

            expect(stack.size()).toBe(2);
            expect(stack.data).toStrictEqual([1, 'hello']);
        });
    });
    describe('Pop operation', () => {
        it('should pop item from stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push('hello');
            
            const poped = stack.pop();

            expect(stack.size()).toBe(1);
            expect(poped).toBe('hello');
        });
    });
    describe('Tail: should return the index of the next item to be removed', () => {
        it('should not return tail, empty stack', () =>{
            const stack = new Stack();

            const tail = stack.tail();

            expect(tail).toBe(null);

        });
        it('should return tail', () =>{
            const stack = new Stack();
            stack.push(100);

            const tail = stack.tail();

            expect(tail).toBe(0);
        });
    });
});