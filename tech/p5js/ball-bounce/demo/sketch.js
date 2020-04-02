// Lav en variabel og kald den x
// giv x værdien 200
let x = 200;

// opret flere variabler
let xSpeed = 5;
let y = 200;
let ySpeed = 3;

let c;
let cFill;

// Definer en funktion der kan ændre fyld og stregfarve
function changeColor() {
  c = color(random(255), random(255), random(255));
  cFill = color(random(255), random(255), random(255));
  strokeWeight(10);
  stroke(c);
  fill(cFill);
}

function setup() {
  createCanvas(600, 400);
  changeColor();
}

function draw() {
  background(c);

  rect(0, 0, width, height);

  // opret variablen d og tildel værdien 120
  let d = 120;

  // tegn en cirkel med centrum i (x, y) og diameter d
  circle(x, y, d);

  // hvis x er større end bredden af lærredet
  // så ændre xSpeed til -xSpeed
  if (x > width - d / 2) {
    changeColor();
    xSpeed = -xSpeed;
  }

  if (x < 0 + d / 2) {
    changeColor();
    xSpeed = -xSpeed;
  }

  if (y > height - d / 2 || y < 0 + d / 2) {
    changeColor();
    ySpeed = -ySpeed;
  }

  x = x + xSpeed;
  y = y + ySpeed;
}
