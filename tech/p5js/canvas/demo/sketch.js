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
  
  ellipse(x,y, 150);
  
  x = 200;
  
  ellipse(x, y, 50);
  
  fill(255, 0, 0);
  ellipse(width,height, 120);
  
  let cx = width /2;
  let cy = height / 2;
  ellipse(cx,cy, 50);
}