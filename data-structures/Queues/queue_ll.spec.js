const Queue = require('./queue_ll');


describe('Queue tests', () =>{
    describe('Create Queue', () =>{
        it('should instance and empty queue', () => {
            const queue = new Queue();

            expect(queue.size).toBe(0);
        });
    })
    describe('Add operation', () => {
        it('should add item to and empty queue', () =>{
            const queue = new Queue();

            queue.add(1);

            expect(queue.size).toBe(1);
            expect(queue.first).toBe(queue.last);
        });
        it('should add item to the end of he Queue', () => {
            const queue = new Queue();

            queue.add(1);
            queue.add('hello');

            expect(queue.size).toBe(2);
            expect(queue.last.data).toBe('hello');
        });
    });
    describe('Remove operation', () => {
        it('should not remove from empty Queue', () =>{
            const queue = new Queue();
           
            const removed = queue.remove();

            expect(queue.size).toBe(0);
            expect(removed).toBe(null);
        });
        it('should remove from single element Queue', ()=> {
            const queue = new Queue();
            queue.add(100);
           
            const removed = queue.remove();

            expect(queue.size).toBe(0);
            expect(removed.data).toBe(100);
            expect(queue.last).toBe(queue.first);
        });
        it('should remove item beginning of the Queue', () => {
            const queue = new Queue();
            queue.add(105);
            queue.add('hello');
            
            const removed = queue.remove();

            expect(queue.size).toBe(1);
            expect(removed.data).toBe(105);
        });
    });
});