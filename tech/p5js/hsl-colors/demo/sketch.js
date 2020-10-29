function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 200, 1);
  slider.position(width/2-255, height/2-300);
  slider.style('width', `${255*2}px`);
}

function draw() {
  translate(width / 2, height / 2);

  const x1 = 0;
  const y1 = 0;
  const x2 = mouseX - width / 2;
  const y2 = mouseY - height / 2;

  const angle = atan2(y2, x2);

  // d is the length of the line
  // the distance from point 1 to point 2.
  const d = int(dist(x1, y1, x2, y2));
  const saturation = constrain(d, 0, 255);
  const hueVal = map(angle, -PI, PI, 0, 255);
  const brightnessVal = slider.value();

  const x3 = saturation * cos(angle);
  const y3 = saturation * sin(angle);

  // background(200);
  colorMode(HSB, 255);
  const c = color(hueVal, saturation, brightnessVal);
  noFill();
  circle(x1, y1, 255*2);
  fill(c);
  // line(x1, y1, x3, y3);
  const circleDiameter = 30;
  stroke(0)
  strokeWeight(3)
  circle(x1, y1, circleDiameter * 2);
  noStroke()
  circle(x3, y3, circleDiameter);

  // Write values as text
  let msg = `abs: ${d}, angle: ${nfc(angle, 2)}`;
  let hsvMsg = `hue: ${nfc(hueVal, 0)}, saturation: ${nfc(saturation)}, brightness: ${nfc(brightnessVal)}`;

  push();
  translate(x1 -200, y1 - 320);
  noStroke();
  fill(255);
  rect(-10,-50,400,60)
  fill(0);
  textSize(20);
  text(msg, 0, -5);
  text(hsvMsg, 0, -30);
  pop();
}
