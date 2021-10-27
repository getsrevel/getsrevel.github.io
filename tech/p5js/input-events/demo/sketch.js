let fillColor = 'black'
let sizeMultiplier = 1

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
}

function draw() {
  background(220);
  text("Press 'r', 'b' or click mouse to change color", 40, 40)
  textSize(20)
  let xPos = mouseX
  let yPos = mouseY
  let shapeSize = 80 * sizeMultiplier

  fill(fillColor)
  if (keyIsPressed) {
    rect(xPos, yPos, shapeSize)
  } else {
    circle(xPos, yPos, shapeSize)
  }
}

function keyPressed() {
  console.log("pressed", key)
  if ('b' == key) {
    fillColor = 'blue'
  }
  if ('r' == key) {
    fillColor = 'red'
  }
}

function keyReleased() {
  console.log("released", key)
  sizeMultiplier = 1
}

function mousePressed() {
  console.log("mouse pressed")
  fillColor = 'yellow'
  sizeMultiplier = 3
}

function mouseReleased() {
  console.log("mouse released")
  fillColor = 'black'
  sizeMultiplier = 3
}
