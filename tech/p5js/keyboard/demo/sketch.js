function setup(){
  let canvas = createCanvas(400,400);
  canvas.parent("sketch-holder");
}

function draw() {
  background(100,0,0);
  fill('red');
  circle(50,150,50);
  circle(width-50,50,50);
  
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
}