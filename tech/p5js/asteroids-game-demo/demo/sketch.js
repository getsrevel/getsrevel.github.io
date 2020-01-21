let ship;
let asteroids = [];
let stats;

// TODO: should belong to the ship that fired
let lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  stats = new Stats();
  for (let i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  asteroids.forEach(it => {
    if (ship.hits(it)) {
      if (!ship.shieldActive()) {
        stats.die();
        ship.respawn();
      }
    }

    it.render();
    it.update();
  });

  lasers.forEach((laser, laserIndex) => {
    laser.render();
    laser.update();

    // Handle laser - asteroid collisions
    asteroids.forEach((asteroid, asteroidIndex) => {
      if (laser.hits(asteroid)) {
        stats.increasePoints();
        if (asteroid.r > 10) {
          let asteroidPieces = asteroid.breakup();
          asteroids = asteroids.concat(asteroidPieces);
        }

        lasers.splice(laserIndex, 1);
        asteroids.splice(asteroidIndex, 1);
      }
    });

    // Handle laser off screen
    if (laser.offscreen()) {
      lasers.splice(laserIndex, 1);
    }
  });

  ship.update();
  ship.render();

  stats.render();
}

function keyPressed() {
  if (key == " ") {
    lasers.push(new Laser(ship.pos, ship.heading));
  }

  if (keyCode === RIGHT_ARROW || key == "d") {
    ship.isTurningRight = true;
  }
  if (keyCode === LEFT_ARROW || key == "a") {
    ship.isTurningLeft = true;
  }
  if (keyCode === UP_ARROW || key == "w") {
    ship.boosting(true);
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW || key == "d") {
    ship.isTurningRight = false;
  }
  if (keyCode === LEFT_ARROW || key == "a") {
    ship.isTurningLeft = false;
  }
  if (keyCode === UP_ARROW || key == "w") {
    ship.boosting(false);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
