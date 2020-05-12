const Queue = require('./queue');

describe('Queue tests', () =>{
    describe('Create Queue', () =>{
        it('should instance and empty queue', () => {
            const queue = new Queue();

            expect(queue.size()).toBe(0);
        });
    })
    describe('Add operation', () => {
        it('should add item to the end of he Queue', () => {
            const queue = new Queue();

            queue.add(1);
            queue.add('hello');

            expect(queue.size()).toBe(2);
            expect(queue.data[1]).toBe('hello');
        });
    });
    describe('Remove operation', () => {
        it('should remove item beginning of the Queue', () => {
            const queue = new Queue();
            queue.add(1);
            queue.add('hello');
            
            const removed = queue.remove();

            expect(queue.size()).toBe(1);
            expect(removed).toBe(1);
        });
    });
});