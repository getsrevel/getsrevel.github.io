let cx;
let cy;

function setup() {
  createCanvas(400, 600);
  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(220);
  fill("gray");
  textSize(20);
  text(`Move using arrow keys`, 10, 30);

  fill("red");
  strokeWeight(5);
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
