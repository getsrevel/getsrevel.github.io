let cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(255, 0, 200);
}

function draw() {
  background(220);
  
  const cSize = 50;
  fill(20);
  circle(width / 2, height / 2, cSize);
  fill(255);
  circle(100, 100, cSize);
  circle(width - 100, 100, cSize);
  circle(100, height - 100, cSize);
  circle(width - 100, height -100, cSize);

  fill(0, 102, 153);
  textSize(20);
  textAlign(CENTER);
  text("Click me!", width/2, height/2 - cSize);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}


function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}
