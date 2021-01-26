let videoElement;
let stream;

let camCapture;

function setup() {
  // Capture the canvas content as a stream
  const c = createCanvas(400, 400);
  const htmlCanvas = c.elt;
  stream = htmlCanvas.captureStream();

  gotStream(stream);
}

function draw() {
  background(220);
  // Draws a red circle at the position of the mouse
  fill('red');
  strokeWeight(5);
  circle(mouseX, mouseY, 50);
}


