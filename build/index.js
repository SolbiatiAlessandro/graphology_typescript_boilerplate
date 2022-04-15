import { Graph } from './graph';
import Sigma from "sigma";
var container = document.getElementById("sigma-container");
var graph = new Graph();
var renderer = new Sigma(graph, container);
