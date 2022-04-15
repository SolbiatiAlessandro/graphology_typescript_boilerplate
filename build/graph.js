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
var Graph = /** @class */ (function (_super) {
    __extends(Graph, _super);
    function Graph() {
        var _this = _super.call(this) || this;
        _this.PUBLIC = true;
        _this.addNode("John", { x: 0, y: 10, size: 5, label: "John", color: "blue" });
        _this.addNode("Mary", { x: 10, y: 0, size: 3, label: "Mary", color: "red" });
        _this.addEdge('John', 'Mary');
        return _this;
    }
    return Graph;
}(GraphologyGraph));
export { Graph };
