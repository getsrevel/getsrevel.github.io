let man;
let otherMan;

function setup() {
  createCanvas(400, 400);
  man = new StickMan(100, 50, 25, "red");
  otherMan = new StickMan(width - 100, 30, 30, "green");
}

function draw() {
  background(220);
  man.render();
  man.update();

  otherMan.render();
  otherMan.update();
}

function mouseClicked() {
  console.log("click");
  man.jump();
  otherMan.jump();
}
