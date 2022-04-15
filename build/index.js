import { createGraph } from './graph';
import Sigma from "sigma";
var container = document.getElementById("sigma-container");
var graph = createGraph();
var renderer = new Sigma(graph, container);
