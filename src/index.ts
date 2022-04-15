import {Graph} from './graph';

import Sigma from "sigma";

const container = document.getElementById("sigma-container") as HTMLElement;
const graph = new Graph();
const renderer = new Sigma(graph, container);
