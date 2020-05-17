const {PriorityItem, PriorityQueue} = require('./priority_queue');


describe('Priority Queue Tests', () => {
    describe('Enqueue Operation', () =>{
        it('should insert in a empty Heap', () =>{
            const queue = new PriorityQueue([]);
            
            const enqueued = queue.enqueue('data',1);

            expect(enqueued.items[0].data).toBe('data');
        });
        it('should insert an MAX number: bubble to the top', () =>{
            const priorityItem1 = new PriorityItem('um', 10);
            const priorityItem2 = new PriorityItem('dois', 8);
            const priorityItem3 = new PriorityItem('tres', 9);

            const queue = new PriorityQueue([priorityItem1, priorityItem2, priorityItem3]);
            //         10
            //     8      9

            
            const enqueued = queue.enqueue('inserted', 100);

            expect(enqueued.items[0].data).toBe('inserted');
        });
        it('should insert a number and bubble up to its position: 29 position', () =>{
            const priorityItem1 = new PriorityItem('um', 10);
            const priorityItem2 = new PriorityItem('dois', 5);
            const priorityItem3 = new PriorityItem('tres', 9);

            const queue = new PriorityQueue([priorityItem1, priorityItem2, priorityItem3]);
            //         10
            //     5      9

            const newItem = new PriorityItem('inserted', 7);

            const enqueued = queue.enqueue('inserted', 7);

            expect(enqueued.items[1].data).toBe('inserted');
            expect(enqueued.items).toStrictEqual([priorityItem1, newItem, priorityItem3, priorityItem2]);
        });
    });

    describe('Dequeue Operation', () => {
        it('should remove from single element Heap', () => {
            const priorityItem1 = new PriorityItem('um', 10);

            const queue = new PriorityQueue([priorityItem1]);   

            const dequeued = queue.dequeue();

            expect(dequeued).toStrictEqual(priorityItem1);
            expect(queue.items.length).toBe(0);
        });
        it('should remove and not bubble down', () => {
            const priorityItem1 = new PriorityItem('um', 10);
            const priorityItem2 = new PriorityItem('dois', 5);
            const priorityItem3 = new PriorityItem('tres', 9);

            const queue = new PriorityQueue([priorityItem1, priorityItem2, priorityItem3]);
            //         10
            //     5      9

            const dequeued = queue.dequeue();

            expect(dequeued).toStrictEqual(priorityItem1);
            expect(queue.items.length).toBe(2);
            expect(queue.items).toStrictEqual([priorityItem3, priorityItem2])
        });
        it('should remove and bubble down', () => {
            const priorityItem1 = new PriorityItem('um', 10);
            const priorityItem2 = new PriorityItem('dois', 5);
            const priorityItem3 = new PriorityItem('tres', 2);

            const queue = new PriorityQueue([priorityItem1, priorityItem2, priorityItem3]);
            //         10
            //     5      9

            const dequeued = queue.dequeue();

            expect(dequeued).toStrictEqual(priorityItem1);
            expect(queue.items.length).toBe(2);
            expect(queue.items).toStrictEqual([priorityItem2, priorityItem3])
        });
    });

});