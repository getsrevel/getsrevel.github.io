let angle = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  let diameter = 50;
  translate(width / 2, height / 2);

  rotate(angle);
  const speed = map(mouseX, 0, width, -1, 1, true);
  angle += 0.4 * speed;

  fill(0);
  textSize(40);
  text("Tak for i dag :-)", 0, 0);

  noFill();
  strokeWeight(3);
  beginShape();
  magnitude = 0;
  for (let theta = 0; theta < 100 * PI; theta += 0.2) {
    // shows 0, then 1, then 2
    let cx = magnitude * cos(theta);
    let cy = magnitude * sin(theta);
    vertex(cx, cy);
    magnitude += 0.5;
  }
  endShape();
}
