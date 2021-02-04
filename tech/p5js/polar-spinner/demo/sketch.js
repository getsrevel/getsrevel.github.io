let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let diameter = 50;
  translate(width / 2, height / 2);

  rotate(angle);
  const speed = map(mouseX, 0, width, -1, 1, true);
  angle += 0.1 * speed;
  const showDots = mouseY < height/2;
  
  fill(0);
  textSize(40);
  text("Tak for kaffe :-)", 30, 10);
  
  noFill();
  strokeWeight(5);
  stroke('greenyellow')
  beginShape();
  magnitude = 0;
  const magStep = map(mouseY, 0, height, 0, 2, true);
  for (let theta = 0; theta < 100 * PI; theta += 0.2) {
    let cx = magnitude * cos(theta);
    let cy = magnitude * sin(theta);
    if(showDots){
      point(cx, cy);
    } else {
      vertex(cx, cy);
    }
    magnitude += magStep;
  }
  endShape();
}
