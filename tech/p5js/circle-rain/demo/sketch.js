const ballCount = 100
let diameters = new Array(ballCount);
let xPositions = new Array(ballCount);
let yPositions = new Array(ballCount);

let ySpeeds = new Array(ballCount);

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset(50)
}

function draw() {
  background(220);

  for (let i = 0; i < ballCount; i++) {
    circle(xPositions[i], yPositions[i], diameters[i])
    yPositions[i] += ySpeeds[i];
  }
}

function reset(maxSize) {
  for (let i = 0; i < ballCount; i++) {
    diameters[i] = random(0, maxSize);
    ySpeeds[i] = random(0.01, 10);
    xPositions[i] = random(0, width);
    yPositions[i] = random(0, height) - height;
  }  
}

function mouseClicked() {
  const maxSize = map(mouseY, 0, height,0,200)
  reset(maxSize)
}
