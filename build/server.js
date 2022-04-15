import { createGraph } from './graph.js';
var graph = createGraph();
import express from "express";
var app = express();
var port = 8080; // default port to listen
app.get("/", function (req, res) {
    res.send("graph order is ".concat(graph.order));
});
app.get("/test", function (req, res) {
    graph.addExampleNode();
    res.send(200);
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
