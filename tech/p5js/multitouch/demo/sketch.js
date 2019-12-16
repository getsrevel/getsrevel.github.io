let buttons = {
  left: false,
  right: false
};
const bSize = 80;
const margin = 20;

let leftButton;
let rightButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  leftButton = createButton("left");
  leftButton.mousePressed(leftPressed);
  leftButton.mouseReleased(leftReleased);
  leftButton.touchStarted(leftPressed);
  leftButton.touchEnded(leftReleased);
  leftButton.style("background-color", "red");
  leftButton.class("noselect");
  leftButton.size(bSize, bSize);

  rightButton = createButton("right");
  rightButton.mousePressed(rightPressed);
  rightButton.mouseReleased(rightReleased);
  rightButton.touchStarted(rightPressed);
  rightButton.touchEnded(rightReleased);
  rightButton.style("background-color", "green");
  rightButton.class("noselect");
  rightButton.size(bSize, bSize);

  handleButtonPositions();
}

function draw() {
  background(100);

  // left button
  fill(buttons.left ? "red" : "pink");
  rect(margin, margin, bSize, bSize);

  // right button
  fill(buttons.right ? "green" : "teal");
  rect(width - margin - bSize, margin, bSize, bSize);
}

const leftPressed = () => (buttons.left = true);
const leftReleased = () => (buttons.left = false);
const rightPressed = () => (buttons.right = true);
const rightReleased = () => (buttons.right = false);

const handleButtonPositions = () => {
  leftButton.position(margin, height - margin - bSize);
  rightButton.position(width - margin - bSize, height - margin - bSize);
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  handleButtonPositions();
}
