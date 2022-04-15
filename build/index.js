import { GGraph } from './ggraph';
import Sigma from "sigma";
var container = document.getElementById("sigma-container");
var graph = new GGraph();
graph.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
graph.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
graph.addEdge('John', 'Mary');
console.log(graph.order); //nodes
console.log(graph.size); //edges
graph.forEachNode(function (node) {
    console.log(node);
});
var renderer = new Sigma(graph, container);
