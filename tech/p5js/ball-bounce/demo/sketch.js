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
  createCanvas(windowWidth, windowHeight);
  const speedScale = 128
  xSpeed = windowWidth / speedScale
  ySpeed = windowHeight / speedScale
  changeColor();
}

function draw() {
  background(c);

  rect(0, 0, width, height);

  // opret variabler til radius og diameter
  let r = 60;
  let d = r * 2;

  // tegn en cirkel med centrum i (x, y) og diameter d
  circle(x, y, d);

  // hvis x er større end bredden af lærredet
  // så sæt xSpeed til -xSpeed
  let isPastRightSide = width < x + r
  if (isPastRightSide) {
    changeColor();
    xSpeed = -xSpeed;
  }

  let isPastLeftSide = 0 > x - r
  if (isPastLeftSide) {
    changeColor();
    xSpeed = -xSpeed;
  }

  let isBelowBottom = height < y + r
  let isAboveTop = 0 > y - r
  if (isBelowBottom || isAboveTop) {
    changeColor();
    ySpeed = -ySpeed;
  }

  x = x + xSpeed;

  // samme som 
  // y = y + ySpeed;
  y += ySpeed;
}
