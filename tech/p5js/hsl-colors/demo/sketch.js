function setup() {
  createCanvas(600, 600);
}

function draw() {
  translate(width / 2, height / 2);

  let x1 = 0;
  let y1 = 0;
  let x2 = mouseX - width / 2;
  let y2 = mouseY - height / 2;

  let angle = atan2(y2, x2);

  // d is the length of the line
  // the distance from point 1 to point 2.
  let d = int(dist(x1, y1, x2, y2));
  let saturation = constrain(d, 0, 255);

  background(200);
  colorMode(HSB, 255);

  let hueVal = map(angle, -PI, PI, 0, 255);

  const luminance = 255;

  let c = color(hueVal, saturation, 255);
  fill(c);
  line(x1, y1, x2, y2);
  const circleDiameter = 30;
  circle(x1, y1, circleDiameter * 2);
  circle(x2, y2, circleDiameter);

  // Write values as text
  let msg = `abs: ${d}, angle: ${nfc(angle, 2)}`;
  let hsvMsg = `hsv: ${nfc(hueVal, 0)}, sat: ${nfc(saturation)}`;

  push();
  translate(x1, y1 - circleDiameter);
  fill(0);
  stroke(0);
  textSize(20);
  text(msg, 0, -5);
  text(hsvMsg, 0, -30);
  pop();
}
