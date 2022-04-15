import GraphologyGraph from 'graphology';
import * as gexf from 'graphology-gexf';
import * as fs from 'fs';

export class Graph extends GraphologyGraph {
	public PUBLIC: boolean = true;
	public static PATH: string = './data/graph.gexf';

	addExampleNode(){
		this.addNode("John3", { x: 0, y: 10, size: 5, label: "John2", color: "blue" });
		this.addEdge('John', 'John3');
		this.save();
	}

	save(){
		fs.writeFileSync(Graph.PATH, gexf.write(this));
	}

	static load(){
		return fs.readFileSync(this.PATH, {'encoding':'utf8'});
	}
}

export function createGraph(): Graph{
	// @ts-ignore
	return gexf.parse(Graph, Graph.load());
}
