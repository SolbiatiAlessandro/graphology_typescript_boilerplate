import {GGraph} from './ggraph';

import Sigma from "sigma";

const container = document.getElementById("sigma-container") as HTMLElement;
const graph = new GGraph();
const renderer = new Sigma(graph, container);
