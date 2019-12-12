function setup(){
  let canvas = createCanvas(800,400);

  canvas.parent("sketch-holder");
}

function draw() {
  background(100,0,0);
  circle(50,50,50);
  circle(width-50,50,50);
  
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
}