function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(220);
  fill(255);

  // variable declaration
  let x;
  // variable assignment
  x = mouseX;

  // declaration and assignment in one line
  let y = mouseY;

  circle(x, y, 150);

  // assign a new value to x
  x = 200;

  ellipse(x, y, 80, 40);

  fill(255, 0, 0);
  circle(width, height, 120);

  let cx = width / 2;
  let cy = height / 2;
  circle(cx, cy, 50);
}
