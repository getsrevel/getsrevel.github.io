let ball;
let bat;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width / 2, height / 2)
  bat = new Bat(0,0)
}

function draw() {
  background(220);
  ball.render();
  ball.update();

  bat.render();
  bat.update();
  bat.collision(ball)
}
