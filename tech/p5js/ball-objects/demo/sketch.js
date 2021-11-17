let balls = []
let bouncingBalls = []
let randomBouncinBalls = []
let pos = new p5.Vector()

function setup() {
  createCanvas(windowWidth, windowHeight)
  pos.x = width / 2
  pos.y = height / 2
  reset()
  createBalls()
}

function draw() {
  background(220)
  renderBalls()
}

// === Helper functions
function reset(position) {
  balls = []
  bouncingBalls = []
  randomBouncinBalls = []
}

function createBalls() {
  for (let i = 0; i < 50; i++) {
    balls.push(new Ball(pos))
  }
}

function createBouncingBalls() {
  for (let i = 0; i < 20; i++) {
    bouncingBalls.push(new BouncingBall(pos))
  }
}

function createRandomBalls() {
  let spawnPoint = createVector(random(50, width - 50), random(50, height - 50))
  for (let i = 0; i < 20; i++) {
    randomBouncinBalls.push(new RandomBouncingBall(spawnPoint))
  }
}

function renderBalls() {
  for (const b of balls) {
    b.update()
    b.render()
  }
  for (const b of bouncingBalls) {
    b.update()
    b.render()
  }
  for (const b of randomBouncinBalls) {
    b.update()
    b.render()
  }
}

// === events ===
function mousePressed() {
  pos.x = mouseX
  pos.y = mouseY
  balls = []
  createBalls()

  if (keyIsDown(SHIFT)) {
    createBouncingBalls()
  }
}

function keyPressed() {
  if ('c' == key) {
    reset()
  }

  if ('r' == key) {
    createRandomBalls()
  } else if ('R' == key) {
    randomBouncinBalls = []
    createRandomBalls()
  }
}
