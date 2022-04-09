import Graph from 'graphology';
var graph = new Graph();
graph.addNode('John');
graph.addNode('Martha');
graph.addEdge('John', 'Martha');
console.log(graph.order); //nodes
console.log(graph.size); //edges
graph.forEachNode(function (node) {
    console.log(node);
});
