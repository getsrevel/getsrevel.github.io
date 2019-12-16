function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(220);
  noFill();
  let cx = 0;
  let cy = 0;
  let diameter = 20;

  let scale = map(mouseX, 0, width, 0, 10, true);
  let tick = map(mouseY, 0, height, PI / 12, (2 * PI) / 3, true);

  // circle in origin
  translate(width / 2, height / 2);
  circle(cx, cy, diameter);

  let magnitude = 10 * scale;
  let thetaInc = PI;
  circle(0, 0, magnitude * 2);

  for (let theta = 0; theta < 2 * PI; theta += tick) {
    cx = magnitude * cos(theta);
    cy = magnitude * sin(theta);

    fill("blue");
    circle(cx, cy, diameter);
  }
}
