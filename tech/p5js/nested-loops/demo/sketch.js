function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0);

  const gridSize = 35;
  const focusX = mouseX
  const focusY = mouseY
  
  for (let x = gridSize; x <= width - gridSize; x += gridSize) {
    for (let y = gridSize; y <= height - gridSize; y += gridSize) {
      stroke(255, random(40, 100));
      strokeWeight(3)
      point(x, y);
      stroke(255, 20);
      strokeWeight(1)
      line(x, y, focusX, focusY);
    }
  }
}
