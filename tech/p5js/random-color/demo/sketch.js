function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255));
  } else {
    fill(random(255), random(255),random(255));
  }
  ellipse(mouseX, mouseY, 80, 80);
}