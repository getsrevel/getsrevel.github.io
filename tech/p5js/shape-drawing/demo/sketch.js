let currentShape = [];
let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
}

function draw() {
  background(0);

  renderHelp();
  renderShapes();
  renderCurrentShape();
}

function renderHelp() {
  push();
  fill(220)
  textSize(20);
  text("k : Add shape", 30, 30);
  text("j : Revert last added shape", 30, 55);
  text("u : Undo last point", 30, 80);
  text("r : Clear drawing", 30, 105);
  pop();
}

function renderShapes() {
  push();
  for (const shape of shapes) {
    noFill();
    stroke('greenyellow');
    strokeWeight(2);
    beginShape();
    curveVertex(shape[0].x, shape[0].y);
    for (const p of shape) {
      curveVertex(p.x, p.y);
    }
    const lastPoint = shape[shape.length - 1];
    curveVertex(lastPoint.x, lastPoint.y);
    endShape();
  }
  pop();
}

function renderCurrentShape() {
  push();
  noFill();
  stroke('red')
  strokeWeight(5)

  for (const p of currentShape) {
    point(p.x, p.y);
  }

  strokeWeight(2)
  beginShape();
  for (const p of currentShape) {
    vertex(p.x, p.y);
  }
  endShape();
  pop();
}

function clearDrawing() {
  shapes = [];
  currentShape = [];
}

function addShape() {
  const aCopy = currentShape.slice();
  shapes.push(aCopy);
  currentShape = [];
}

function mousePressed() {
  const p = createVector(mouseX, mouseY);
  currentShape.push(p);
}

function keyPressed() {
  if (key == 'r') {
    clearDrawing();
  }
  if (key == 'j') {
    if (0 < shapes.length) {
      currentShape = shapes.pop();
    }
  }
  if (key == 'u') {
    currentShape.pop();
  }
  if (key == 'k') {
    addShape();
  }
  if (key == 'd') {
    loadData();
  }
}

function loadData() {
  shapes = [
    [
      new p5.Vector(210, 165),
      new p5.Vector(119, 198),
      new p5.Vector(96, 266),
      new p5.Vector(122, 334),
      new p5.Vector(200, 388),
      new p5.Vector(311, 374),
      new p5.Vector(330, 273),
      new p5.Vector(309, 189),
      new p5.Vector(214, 141),
      new p5.Vector(175, 147),
      new p5.Vector(153, 124),
    ],
    [
      new p5.Vector(184, 225),
      new p5.Vector(165, 231),
      new p5.Vector(166, 257),
      new p5.Vector(182, 259),
      new p5.Vector(200, 240),
      new p5.Vector(189, 226),
    ],
    [
      new p5.Vector(240, 232),
      new p5.Vector(238, 250),
      new p5.Vector(253, 266),
      new p5.Vector(270, 250),
      new p5.Vector(264, 231),
      new p5.Vector(249, 225),
      new p5.Vector(241, 226),
    ],
    [
      new p5.Vector(165, 300),
      new p5.Vector(190, 321),
      new p5.Vector(242, 333),
      new p5.Vector(271, 321),
      new p5.Vector(280, 302),
    ],
  ];

  // Center the shape horizontally
  const xOffset = width / 2 - 220;
  for (const shape of shapes) {
    for (const p of shape) {
      p.x += xOffset;
    }
  }
}
