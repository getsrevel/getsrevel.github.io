function setup(){
  createCanvas(400,400);
}

function draw() {
  background(100,0,0);
  fill('red');
  circle(50,50,50);
  circle(width-50,50,50);
  
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(25, 250, 50, 50);
}