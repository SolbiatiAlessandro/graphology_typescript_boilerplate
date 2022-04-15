import Graph from 'graphology';

export class GGraph extends Graph {
	public PUBLIC: boolean = true;

	constructor(){
		super();
		this.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
		this.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
		this.addEdge('John', 'Mary');
	}
}
