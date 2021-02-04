function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noFill();
  
  const scale = map(mouseX, 50, width - 50, 0, 30, true);
  const tick = map(mouseY, 100, height - 100, PI / 12, (2 * PI) / 3, true);
  
  translate(width / 2, height / 2);
  const diameter = 20;
  circle(0, 0, diameter);

  const magnitude = 10 * scale;
  circle(0, 0, magnitude * 2);

  fill("blue");
  for (let theta = 0; theta < 2 * PI; theta += tick) {
    const cx = magnitude * cos(theta);
    const cy = magnitude * sin(theta);

    circle(cx, cy, diameter);
  }
}
