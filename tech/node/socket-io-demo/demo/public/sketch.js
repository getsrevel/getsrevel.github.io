const socket = io();

function setup() {
  createCanvas(400, 400);
  background(0);

  // Set up listener for incomming socket events
  socket.on('mouse', newDrawing);
}

const lineWidth = 10;

function newDrawing(data){
  // Draw some white circles with different colors
  colorMode(RGB, 255);
  fill(255, 0 ,100);
  noStroke();
  ellipse(data.x, data.y, lineWidth, lineWidth);
}

function mouseDragged() {
    let currentNumX = mouseX;
    let lowerBound = 0;
    let upperBoundX = width; //100;
    let normalizedX = norm(currentNumX, lowerBound, upperBoundX);
    let currentNumY = mouseY;
    let upperBoundY = height; //100;
    let normalizedY = norm(currentNumY, lowerBound, upperBoundY);
    colorMode(HSB, 255);
    let c = color(normalizedX*255, normalizedY*255, 255);
    // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, lineWidth, lineWidth);


  const data = {
    x: mouseX,
    y: mouseY,
  };

  console.log(`Sending ${data.x} ${data.y} `);
  socket.emit("mouse", data);
}

