let flickSound;
let whistleSound;
let whistleShortSound

function preload() {
  flickSound = loadSound('flick.mp3');
  whistleSound = loadSound('whistle.mp3', doneLoadingWhistleSound);
  whistleShortSound = loadSound('whistle-short.mp3', () => { 
    console.log('short ready');
  });
}

function setup() {
  createCanvas(400, 400);
}

function doneLoadingWhistleSound(){
  console.log("doneLoadingWhistleSound");
}

function draw() {
  background(220);
  fill("blue");
  circle(width / 2, height / 2, 50);
  textSize(20);
  text("Tryk på: SPACE, K, L, W", 50,50);
  text("eller klik med musen", 50,80);

}

function mouseClicked(){
  console.log("flick started by mouse");
  flickSound.play();
}

function keyPressed(){
  if(' ' == key){
    console.log("flick started by keyboad");
    flickSound.play();
  }

  if('l' == key){
    whistleSound.setLoop(true);
    whistleSound.play();
  }
  if('k' == key){
    whistleSound.setLoop(false);
  }

  if('w' == key) {
    console.log("short whistle");
    whistleShortSound.play();
  }
}
