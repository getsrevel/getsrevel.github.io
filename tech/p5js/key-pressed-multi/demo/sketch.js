let cx;
let cy;

let state = {
  north: false,
  south: false,
  west: false,
  east: false,
  boost: false
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(220);
  fill(0);
  noStroke();
  textSize(20);
  text(`Move using arrow keys and space`, 10, 30);

  // show
  if (state.boost) {
    fill("orange");
    stroke("red");
  } else {
    fill("gray");
    stroke(0);
  }

  strokeWeight(5);
  circle(cx, cy, 50);

  // update position
  const step = state.boost ? 5 : 1;
  if (state.west) {
    cx -= step;
  }
  if (state.east) {
    cx += step;
  }
  if (state.north) {
    cy -= step;
  }
  if (state.south) {
    cy += step;
  }
}

function keyPressed() {
  console.log("Pressed:", key, keyCode)
  if (key === " ") {
    state.boost = true;
  }
  if (keyCode === LEFT_ARROW) {
    state.west = true;
  }
  if (keyCode === RIGHT_ARROW) {
    state.east = true;
  }
  if (keyCode === UP_ARROW) {
    state.north = true;
  }
  if (keyCode === DOWN_ARROW) {
    state.south = true;
  }
  return true
}

function keyReleased() {
  console.log("Released:", key, keyCode)
  if (key === " ") {
    state.boost = false;
  }
  if (keyCode === LEFT_ARROW) {
    state.west = false;
  }
  if (keyCode === RIGHT_ARROW) {
    state.east = false;
  }
  if (keyCode === UP_ARROW) {
    state.north = false;
  }
  if (keyCode === DOWN_ARROW) {
    state.south = false;
  }
  return true
}
