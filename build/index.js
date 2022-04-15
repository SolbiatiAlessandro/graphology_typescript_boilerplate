import { GGraph } from './ggraph';
import Sigma from "sigma";
var container = document.getElementById("sigma-container");
var graph = new GGraph();
var renderer = new Sigma(graph, container);
