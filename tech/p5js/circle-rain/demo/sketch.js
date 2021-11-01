const ballCount = 100
let ds = new Array(ballCount);
let xs = new Array(ballCount);
let ys = new Array(ballCount);

let ySpeed = new Array(ballCount);

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset(50)
}

function draw() {
  background(220);

  for (let i = 0; i < ballCount; i++) {
    circle(xs[i], ys[i], ds[i])
    ys[i] += ySpeed[i];
  }
}

function reset(maxSize) {
  for (let i = 0; i < ballCount; i++) {
    ds[i] = random(0, maxSize);
    ySpeed[i] = random(0.01, 10);
    xs[i] = random(0, width);
    ys[i] = random(0, height) - height;
  }  
}

function mouseClicked() {
  const maxSize = map(mouseY, 0, height,0,200)
  reset(maxSize)
}
