const Stack = require('./stack_ll');

describe('Stack tests', () =>{
    describe('Create stack', () =>{
        it('should instance and empty stack', () => {
            const stack = new Stack();

            expect(stack.size).toBe(0);
        });
    });
    describe('Push operation', () => {
        it('should push item to empty stack, first and last should be the same', () => {
            const stack = new Stack();

            stack.push(1);

            expect(stack.size).toBe(1);
            expect(stack.first).toBe(stack.last);
        });
        it('should push item to  stack', () => {
            const stack = new Stack();

            stack.push(1);
            stack.push(100);

            expect(stack.size).toBe(2);
            expect(stack.first.data).toBe(100);
        });
    });
    describe('Pop operation', () => {
        it('should not pop item from empty stack', () => {
            const stack = new Stack();

            const poped = stack.pop();

            expect(stack.size).toBe(0);
            expect(poped).toBe(null);
        });
        it('should not pop item from single element stack', () => {
            const stack = new Stack();
            stack.push('hello');

            const poped = stack.pop();

            expect(stack.size).toBe(0);
            expect(stack.first).toBe(null);
            expect(stack.last).toBe(null);
            expect(poped.data).toBe('hello');
        });
        it('should not pop item from stack', () => {
            const stack = new Stack();
            stack.push('hello');
            stack.push(100);  //first

            const poped = stack.pop();

            expect(stack.size).toBe(1);
            expect(stack.first.data).toBe('hello');
            expect(poped.data).toBe(100);
        });
    });       
});
