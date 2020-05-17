const BinaryHeap = require('./binary_heap');


describe('Binary Heap tests', () => {
    describe('Insert Operation', () =>{
        it('should insert in a empty Heap', () =>{
            const heap = new BinaryHeap([]);
            
            const inserted = heap.insert(10);

            expect(inserted.values[0]).toBe(10);
        });
        it('should insert an MAX number: bubble to the top', () =>{
            const heap = new BinaryHeap([60,29,30,25,24,29,28]);
            //         60
            //     29      30
            //   25  24  29  28
            
            const inserted = heap.insert(100);

            expect(inserted.values[0]).toBe(100);
        });
        it('should insert a number and bubble up to its position: 29 position', () =>{
            const heap = new BinaryHeap([60,29,30,25,24,29,28]);
            //         60
            //     29      30
            //   25  24  29  28
            
            const inserted = heap.insert(35);

            expect(inserted.values).toStrictEqual([60,35,30,29,24,29,28,25]);
        });
    });
    describe('Extract Max Operation', () => {
        it('should remove from single element Heap', () => {
            const heap = new BinaryHeap([1]);

            const removed = heap.extractMax();

            expect(removed).toBe(1);
            expect(heap.values.length).toBe(0);
        });
        it('should not bubble down', () => {
            const heap = new BinaryHeap([60,29,30,25,24,29,35]);
            //         60
            //     29      30
            //   25  24  29  35

            const removed = heap.extractMax();

            expect(removed).toBe(60);
            expect(heap.values.length).toBe(6);
            expect(heap.values).toStrictEqual([35,29,30,25,24,29])
        });
        it('should bubble down element: one right, one left', () => {
            const heap = new BinaryHeap([60,29,30,25,24,29,28]);
            //         60
            //     29      30
            //   25  24  29  28
            //           -
            const removed = heap.extractMax();

            expect(removed).toBe(60);
            expect(heap.values.length).toBe(6);
            expect(heap.values).toStrictEqual([30,29,29,25,24,28])
        });
        it('should bubble down element: one right', () => {
            const heap = new BinaryHeap([60,29,30,25,24,20,28]);
            //         60
            //     29      30  <-
            //   25  24  20  28
            
            const removed = heap.extractMax();

            expect(removed).toBe(60);
            expect(heap.values.length).toBe(6);
            expect(heap.values).toStrictEqual([30,29,28,25,24,20])
        });
        it('should bubble down element: two left', () => {
            const heap = new BinaryHeap([60,35,30,31,24,20,28]);
            //         60
            //     35      30
            //   31  24  20  28
            //    -
            const removed = heap.extractMax();

            expect(removed).toBe(60);
            expect(heap.values.length).toBe(6);
            expect(heap.values).toStrictEqual([35,31,30,28,24,20]);
        });
        it('should bubble down element: one left, one right', () => {
            const heap = new BinaryHeap([60,35,30,24,31,20,28]);
            //         60
            //     35      30
            //   24  31  20  28
            //        -
            const removed = heap.extractMax();

            expect(removed).toBe(60);
            expect(heap.values.length).toBe(6);
            expect(heap.values).toStrictEqual([35,31,30,24,28,20]);
        });
        it('should bubble down element: one left', () => {
            const heap = new BinaryHeap([60,35,30,10,11,20,12]);
            //         60
            //   -> 35     30
            //   10  11  20  12
            //    
            const removed = heap.extractMax();

            expect(removed).toBe(60);
            expect(heap.values.length).toBe(6);
            expect(heap.values).toStrictEqual([35,12,30,10,11,20]);
        }); 
    });
});