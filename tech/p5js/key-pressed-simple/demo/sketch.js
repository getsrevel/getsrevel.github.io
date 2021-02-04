let cx;
let cy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(20);
  fill("gray");
  textSize(20);
  text(`Move using arrow keys`, 10, 30);

  fill("red");
  noStroke();
  circle(cx, cy, 50);
}

function keyPressed() {
  const step = 10;
  if (keyCode === LEFT_ARROW) {
    cx -= step;
  }
  if (keyCode === RIGHT_ARROW) {
    cx += step;
  }
  if (keyCode === UP_ARROW) {
    cy -= step;
  }
  if (keyCode === DOWN_ARROW) {
    cy += step;
  }
}
