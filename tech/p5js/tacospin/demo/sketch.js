let img;

function preload() {
  img = loadImage("assets/taco.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let angle = 0;
function draw() {
  background(220);

  const speed = map(mouseX, 0, width, -1, 1, true);
  // show angle value
  const tHeight = 40;
  const margin = 10;
  textSize(tHeight);
  let tposY = margin + tHeight;
  text(`Angle ${nfc(angle, 2)}`, margin, tposY);
  tposY += margin + tHeight;
  text(`Speed ${nfc(speed, 2)}`, margin, tposY);

  // draw at center of canvas
  const cx = width / 2;
  const cy = height / 2;
  translate(cx, cy);

  // compute image scale
  const scale = 0.3;
  const dw = img.width * scale;
  const dh = img.height * scale;

  // draw image
  rotate(angle);
  imageMode(CENTER);
  image(img, 0, 0, dw, dh);

  angle += 0.1 * speed;
}
