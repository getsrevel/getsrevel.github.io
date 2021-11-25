let shapes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  createShapes()
}

function draw() {
  background('LightSkyBlue');

  for (const shape of shapes) {
    shape.render()
  }
}

// === Helper functions
function createShapes() {
  shapes = []
  let p1 = new p5.Vector()
  let p2 = new p5.Vector()

  let shapeCount = random(10)
  for (let i = 0; i < shapeCount; i++) {
    p1.x = random(0, width)
    p1.y = random(0, height)
    p2.x = random(0, width)
    p2.y = random(0, height)

    let s = new Shape(p1, p2)
    shapes.push(s)
  }  
}

// === Event handling
function mousePressed() {
  createShapes()
}
