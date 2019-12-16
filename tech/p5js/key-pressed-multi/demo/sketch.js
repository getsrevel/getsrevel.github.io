let cx;
let cy;

let state = {
  up: false,
  down: false,
  left: false,
  right: false,
  engine: false
};

function setup() {
  createCanvas(400, 600);
  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(220);
  fill("gray");
  textSize(20);
  text(`Move using arrow keys and space`, 10, 30);

  // show
  if (state.engine) {
    fill("red");
  } else {
    fill("gray");
  }

  strokeWeight(5);
  circle(cx, cy, 50);

  // update position
  const step = 1;
  if (state.left) {
    cx -= step;
  }
  if (state.right) {
    cx += step;
  }
  if (state.up) {
    cy -= step;
  }
  if (state.down) {
    cy += step;
  }
}

function keyPressed() {
  if (key === " ") {
    state.engine = true;
  }
  if (keyCode === LEFT_ARROW) {
    state.left = true;
  }
  if (keyCode === RIGHT_ARROW) {
    state.right = true;
  }
  if (keyCode === UP_ARROW) {
    state.up = true;
  }
  if (keyCode === DOWN_ARROW) {
    state.down = true;
  }
}

function keyReleased() {
  if (key === " ") {
    state.engine = false;
  }
  if (keyCode === LEFT_ARROW) {
    state.left = false;
  }
  if (keyCode === RIGHT_ARROW) {
    state.right = false;
  }
  if (keyCode === UP_ARROW) {
    state.up = false;
  }
  if (keyCode === DOWN_ARROW) {
    state.down = false;
  }
}
