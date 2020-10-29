function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220)
  const size = windowHeight/8
  let w = size
  let h = size
  const x = mouseX
  const y = mouseY
  const xLimit = width / 2
  const yLimit = height / 2

  // Boolean expression
  const xIsSmall = x < xLimit
  const yIsSmall = y < yLimit

  // NOT operator
  const xIsLarge = !xIsSmall
  const yIsLarge = !yIsSmall

  // defaults
  let c = color(220)
  let lineWidth = 2

  // BRANCH on condition
  if (xIsSmall) {
    w = w / 2;
  }

  if (yIsSmall) {
    h = h / 2
  }

  // OR operator
  if (xIsSmall || yIsSmall) {
    c = color("red");
  }
  // AND operator
  if (xIsLarge && yIsLarge) {
    lineWidth = lineWidth * 3;
  }

  // XOR
  const showAsRectangle = xIsLarge && !yIsLarge || !xIsLarge && yIsLarge;

  // Draw moving shape
  fill(c);
  strokeWeight(lineWidth);
  if (showAsRectangle) {
    rect(x, y, w, h)
  } else {
    ellipse(x, y, w, h);
  }

  // Draw limits
  line(xLimit, 0, xLimit, height)
  line(0, yLimit, width, yLimit)
}