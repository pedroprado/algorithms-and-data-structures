//UNDIRECTED GRAPH
//using Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (name) => {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    return this;
  };

  //Add a connection between two vertexes
  //Assume valid vertices
  addEdge = (vertex1, vertex2) => {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  };

  //Remove a Vertex from the graph
  //For removing a vertex, we have also to remove its connections (EDGES)!
  //1.Function receives a VertexName
  //2.Find the connections (edges) of the VertexName
  //3.Go to theses Connections (which are Vertices) and remove the VertexName from the Edge List
  removeVertex = (name) => {
    const edges = this.adjacencyList[name];

    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      this.adjacencyList[edge] = this.adjacencyList[edge].filter(
        (vertex) => vertex !== name
      );
    }
    delete this.adjacencyList[name];
    return this;
  };

  //Remove a connection between two vertexes
  //Assume valid vertices
  removeEdge = (vertex1, vertex2) => {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
    return this;
  };

  //DFS for graphs:
  //PSEUDOCODE
  //1.Start from some vertex
  //2.Add the vertex to the result list, and mark it as visited
  //3.For each neighbor in vertex's neighbors: check if it is not visited and, and if its not, repeat step 2
  //EDGE CASES:
  //Return if alredy visited
  depthFirstSearchRecursive = (vertex) => {
    const results = [];
    const visited = {};

    const traverse = (vertex) => {
      if (vertex) {
        results.push(vertex);
        visited[vertex] = true;
        const neighbors = this.adjacencyList[vertex];
        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i];
          if (!visited[neighbor]) {
            return traverse(neighbor);
          }
        }
      }
      return null;
    };

    traverse(vertex);
    return results;
  };

  depthFirstSearchIterative = (vertex) => {};

  breadthFirstSearchIterative = (vertex) => {};
}

module.exports = Graph;
