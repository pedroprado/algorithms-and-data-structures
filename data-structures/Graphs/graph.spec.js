const Graph = require('./graphs');


describe('Graph Tests', ()=>{
    describe('Add Vertex Test', () =>{
        it('should add vertex', () => {
            const graph = new Graph();

            const added = graph.addVertex('Tokyo');

            expect(added.adjacencyList['Tokyo']).toStrictEqual([]);
        });
    });
    describe('Add Edge Test', () =>{
        it('should add edge', () => {
            const graph = new Graph();
            graph.addVertex('Santos');
            graph.addVertex('Guaruja');

            const edges = graph.addEdge('Santos', 'Guaruja');
            
            expect(edges.adjacencyList['Santos']).toStrictEqual(['Guaruja']);
            expect(edges.adjacencyList['Guaruja']).toStrictEqual(['Santos']);
        });
        it('should add edges', () => {
            const graph = new Graph();
            graph.addVertex('Santos');
            graph.addVertex('Guaruja');
            graph.addVertex('Sao Vicente');

            graph.addEdge('Santos', 'Guaruja');
            graph.addEdge('Santos', 'Sao Vicente');

            
            expect(graph.adjacencyList['Santos']).toStrictEqual(['Guaruja', 'Sao Vicente']);
            expect(graph.adjacencyList['Guaruja']).toStrictEqual(['Santos']);
            expect(graph.adjacencyList['Sao Vicente']).toStrictEqual(['Santos']);
        });
    });
    describe('Remove Vertex Test', () =>{
        it('should remove vertex', () => {
            const graph = new Graph();
            graph.addVertex('Santos');
            graph.addVertex('Guaruja');
            graph.addVertex('Sao Vicente');
            graph.addEdge('Santos', 'Guaruja');
            graph.addEdge('Santos', 'Sao Vicente');

            graph.removeVertex('Santos')
            
            expect(graph.adjacencyList['Santos']).toStrictEqual(undefined);
            expect(graph.adjacencyList['Guaruja']).toStrictEqual([]);
            expect(graph.adjacencyList['Sao Vicente']).toStrictEqual([]);
        });
    });
    describe('Remove Edge Test', () =>{
        it('should remove edges', () => {
            const graph = new Graph();
            graph.addVertex('Santos');
            graph.addVertex('Guaruja');
            graph.addVertex('Sao Vicente');
            graph.addEdge('Santos', 'Guaruja');
            graph.addEdge('Santos', 'Sao Vicente');

            graph.removeEdge('Santos', 'Sao Vicente')
            
            expect(graph.adjacencyList['Santos']).toStrictEqual(['Guaruja']);
            expect(graph.adjacencyList['Guaruja']).toStrictEqual(['Santos']);
            expect(graph.adjacencyList['Sao Vicente']).toStrictEqual([]);
        });
    });
    describe('Deoth First Search Test', () =>{
        it('should find edges recursively', () => {
            const graph = new Graph();
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            graph.addVertex('F');

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');
            graph.addEdge('B', 'D');
            graph.addEdge('C', 'E');
            graph.addEdge('D', 'E');
            graph.addEdge('D', 'F');
            graph.addEdge('E', 'F');
            //      A
            //    /   \
            //   B     C
            //   |     |
            //   D --- E
            //    \   /
            //      E

            const result = graph.depthFirstSearchRecursive('A');
            expect(result).toStrictEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
        });
        it('should find edges iteratively', () => {
            const graph = new Graph();
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            graph.addVertex('F');

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');
            graph.addEdge('B', 'D');
            graph.addEdge('C', 'E');
            graph.addEdge('D', 'E');
            graph.addEdge('D', 'F');
            graph.addEdge('E', 'F');
            //      A
            //    /   \
            //   B     C
            //   |     |
            //   D --- E
            //    \   /
            //      E

            const result = graph.depthFirstSearchIterative('A');
            expect(result).toStrictEqual([ 'A', 'C', 'E', 'F', 'D', 'B' ]);
        });
    });
    describe('Breadth First Search', ()=>{
        it('should find edges iteratively', () => {
            const graph = new Graph();
            graph.addVertex('A');
            graph.addVertex('B');
            graph.addVertex('C');
            graph.addVertex('D');
            graph.addVertex('E');
            graph.addVertex('F');

            graph.addEdge('A', 'B');
            graph.addEdge('A', 'C');
            graph.addEdge('B', 'D');
            graph.addEdge('C', 'E');
            graph.addEdge('D', 'E');
            graph.addEdge('D', 'F');
            graph.addEdge('E', 'F');
            //      A
            //    /   \
            //   B     C
            //   |     |
            //   D --- E
            //    \   /
            //      E

            const result = graph.breadthFirstSearchIterative('A');
            expect(result).toStrictEqual([ 'A', 'B', 'C', 'D', 'E', 'F' ]);
        });
    });
});