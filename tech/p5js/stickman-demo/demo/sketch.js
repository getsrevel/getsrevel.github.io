let man;
let child;

function setup() {
  createCanvas(windowWidth, windowHeight);
  const halfWidth = width/2;
  man = new StickMan(halfWidth +150, 70, 25, "blue");
  woman = new StickMan(halfWidth - 150, 60, 15, "red");
  child = new StickMan(halfWidth, 30, 45, "greenyellow");
}

function draw() {
  background(220);
  textSize(20)
  text("Klik med musen for at hoppe", 30, 40)
  man.render();
  man.update();

  woman.render();
  woman.update();

  child.render();
  child.update();
}

function mouseClicked() {
  man.jump();
  woman.jump();
  child.jump();
}
