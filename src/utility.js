import pathfinding from "pathfinding";
var finder;
var grid;
("");

export function createGrid() {
  grid = new pathfinding.Grid(1000, 1000);
  finder = new pathfinding.AStarFinder({
    // diagonalMovement: pathfinding.DiagonalMovement.Never,
    allowDiagonal: false,
    heuristic: pathfinding.Heuristic.manhattan,
    weight: 2,
  });
}

export function findPath(x1, y1, x2, y2) {}

export function drawConnections(s, connection) {
  // let the group tranformaton matrix
  let fromParentX = s
    .select("#" + connection.from)
    .parent()
    .transform().localMatrix.e;
  let fromParentY = s
    .select("#" + connection.from)
    .parent()
    .transform().localMatrix.f;

  let toParentX = s
    .select("#" + connection.to)
    .parent()
    .transform().localMatrix.e;
  let toParentY = s
    .select("#" + connection.to)
    .parent()
    .transform().localMatrix.f;

  console.log(s.select("#" + connection.from).attr("cx"));

  let fromPinX = parseInt(s.select("#" + connection.from).attr("cx")); // get the pin circle x coordinate
  let fromPinY = parseInt(s.select("#" + connection.from).attr("cy")); // get the pin circle y cordinate

  let toPinX = parseInt(s.select("#" + connection.to).attr("cx"));
  let toPinY = parseInt(s.select("#" + connection.to).attr("cy"));

  let x1 = fromParentX + fromPinX; // combine tranformation matrix + pin circle x coordinate to get actual x coordinate
  let y1 = fromParentY + fromPinY;

  let x2 = toParentX + toPinX;
  let y2 = toParentY + toPinY;

  // testing coordinates

  // let x1 = 50;
  // let y1 = 20;
  // let x2 = 100;
  // let y2 = 100;

  var path = finder.findPath(x1, y1, x2, y2, grid);

  path.forEach(function (item, index) {
    return s.circle(item[0], item[1], 0.5).attr("fill", "#ff0000");
  });
  debugger;
}

export function onStart(evt) {
  this.data("origTransform", this.transform().local);
}

export function onMove(dx, dy) {
  this.attr({
    transform:
      this.data("origTransform") +
      (this.data("origTransform") ? "T" : "t") +
      [dx, dy],
  });
  reDrawConnections();
}

export function onEnd(evt) {}

export function reDrawConnections() {
  console.log("redrawing connections");
}
