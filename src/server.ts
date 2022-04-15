import {Graph, createGraph} from './graph.js';
const graph: Graph = createGraph();

import express from "express";
const app = express();
const port = 8080; // default port to listen

app.get( "/", ( req, res ) => {
    res.send(`graph order is ${ graph.order }`);
} );

app.get( "/test", ( req, res ) => {
	  graph.addExampleNode();
    res.sendStatus(200);
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
