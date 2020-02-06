let ship;

function setup() {
  createCanvas(400, 600);
  ship = new Ship();
  ship.velocity = p5.Vector.fromAngle(-PI * 0.75, 20);
  ship.jumpTo(width / 2, height / 2);
  console.log(ship);
}

function draw() {
  background(220);
  const messages = [
    `Object and vector demo`,
    `Click mouse to move`,
    `press ${vectorDebugKey} to show vectors`,
    `press ${shipDebugKey} to show ship debug`
  ];

  fill("gray");
  noStroke();
  const lineHeight = 20;
  textSize(lineHeight);

  const offset = height - messages.length * lineHeight - 10;
  // for (let i = 0; i < messages.length; i++) {
  //   const m = messages[i];
  //   text(m, 10, offset + i*20);
  // }

  // for (let i = 0; i < messages.length; i++) {
  //   text(messages[i], 10, offset + i * 20);
  // }

  messages.forEach((m, i) => {
    text(m, 10, offset + i * 20);
  });

  const v0 = createVector(0, 0);
  const mouseVec = createVector(mouseX, mouseY);
  const dir = p5.Vector.sub(mouseVec, ship.position);
  ship.velocity = dir;

  ship.render();

  if (renderVectors) {
    // render debug
    drawArrow(v0, mouseVec, color("blue"));
    drawArrow(ship.position, dir, color("purple"));
  }
  if (renderShipDebug) {
    ship.debugRender();
  }
}

function mouseClicked() {
  ship.jumpTo(mouseX, mouseY);
}

let renderVectors = false;
let renderShipDebug = false;
const vectorDebugKey = "v";
const shipDebugKey = "s";
function keyPressed() {
  if (key === vectorDebugKey) {
    renderVectors = !renderVectors;
  }
  if (key === shipDebugKey) {
    renderShipDebug = !renderShipDebug;
  }
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
