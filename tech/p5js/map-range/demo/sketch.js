function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(133, 18, 9);
  stroke(209, 52, 40)
  strokeWeight(3)
}

function draw() {
  background(70);

  // Define tilt based on mouse horizontal position
  const yRange = height / 4
  const deltaY = map(mouseX, 0, width, -yRange, yRange, true)
  
  // Define control points
  const ax = 50
  const ay = height / 2 - deltaY
  const bx = width - ax
  const by = height / 2 + deltaY

  // Draw large cirles at control poins
  const diameter = 50
  circle(ax, ay, diameter)
  circle(bx, by, diameter)

  // Define number of circles based on mouse vertical position
  let n = map(mouseY, 0, height, 30, 2, true)
  n = ceil(n)

  // Draw circles using a loop
  for (let i = 0; i <= n; i++) {
    const x = map(i, 0, n, ax, bx)
    const y = map(i, 0, n, ay, by)
    circle(x, y, diameter / 2)
  }
}
