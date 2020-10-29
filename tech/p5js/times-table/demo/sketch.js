let r;
let factor = 0;
let total = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  const maxSize = min(width, height);
  r = maxSize / 2 - 16;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

let xoff = 0;

function updateColor() {
  xoff = xoff + 0.01;
  let r = noise(xoff) * 255;
  let g = noise(xoff + 200) * 255;
  let b = noise(xoff + 400) * 255;
  stroke(r, g, b);
}

function draw() {
  background(0);

  let autoRun = true;
  if (autoRun) {
    total = 100;
    factor += 0.01;
  } else {
    total = map(mouseY, 0, height, 0, 200);
    factor = map(mouseX, 0, width, 0, 20);
  }

  translate(width / 2, height / 2);

  textSize(32);
  text("total  " + nf(total, 0, 2), -width / 2 + 10, height / 2 - 70);
  text("factor " + nf(factor, 0, 3), -width / 2 + 10, height / 2 - 30);

  noFill();
  strokeWeight(2);
  updateColor();
  ellipse(0, 0, r * 2);

  strokeWeight(1);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}
