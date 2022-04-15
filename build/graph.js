var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import GraphologyGraph from 'graphology';
import * as gexf from 'graphology-gexf';
import * as fs from 'fs';
var Graph = /** @class */ (function (_super) {
    __extends(Graph, _super);
    function Graph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PUBLIC = true;
        return _this;
    }
    Graph.prototype.addExampleNode = function () {
        this.addNode("John3", { x: 0, y: 10, size: 5, label: "John2", color: "blue" });
        this.addEdge('John', 'John3');
        this.save();
    };
    Graph.prototype.save = function () {
        fs.writeFileSync(Graph.PATH, gexf.write(this));
    };
    Graph.load = function () {
        return fs.readFileSync(this.PATH, { 'encoding': 'utf8' });
    };
    Graph.PATH = './data/graph.gexf';
    return Graph;
}(GraphologyGraph));
export { Graph };
export function createGraph() {
    // @ts-ignore
    return gexf.parse(Graph, Graph.load());
}
