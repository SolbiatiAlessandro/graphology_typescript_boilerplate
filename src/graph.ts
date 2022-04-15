import GraphologyGraph from 'graphology';
import * as gexf from 'graphology-gexf';
import * as fs from 'fs';


export class Graph extends GraphologyGraph {
	public PUBLIC: boolean = true;

	addExampleNode(){
		this.addNode("John3", { x: 0, y: 10, size: 5, label: "John2", color: "blue" });
		this.addEdge('John', 'John3');
		GraphBuilder.save(this);
	}
}

export abstract class GraphBuilder {
	public static PATH: string = './data/graph.gexf';

	// no-browser
	static loadGraphData(): string {
		return fs.readFileSync(GraphBuilder.PATH, {'encoding':'utf8'});
	}

	static createGraph(graphData: string): Graph{
		// @ts-ignore
		return gexf.parse(Graph, graphData);
	}

	// no-browser
	static save(graph: Graph){
		fs.writeFileSync(GraphBuilder.PATH, gexf.write(graph));
	}
}

