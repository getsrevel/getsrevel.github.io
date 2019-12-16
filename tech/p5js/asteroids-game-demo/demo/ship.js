function Ship() {
  this.pos = createVector(width / 2, height / 2);

  this.r = 20;

  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0, 0);
  this.isBoosing = false;
  this.shield = 120;

  this.update = function() {
    if (this.isBoosing) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  };

  this.boosting = state => {
    this.isBoosing = state;
  };

  this.boost = function() {
    let force = p5.Vector.fromAngle(this.heading);
    force.mult(0.5);
    this.vel.add(force);
  };

  this.hits = asteroid => {
    let d = this.pos.dist(asteroid.pos);
    return d < this.r + asteroid.r;
  };

  this.shieldActive = () => this.shield >= 0;

  this.respawn = () => {
    console.log("respawn with shield for some seconds");
    this.shield = 30 * 4;
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector();
  };

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    if (this.shieldActive()) {
      this.shield--;
      stroke("blue");
    } else {
      stroke(255);
    }
    fill(0);
    // body
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    // engine
    const engineSize = this.r / 2;
    if(this.isBoosing){
      fill('red');
    }
    rect(-engineSize / 2, this.r, engineSize, engineSize);
    pop();
  };

  this.edges = () => {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  };

  this.setRotation = function(angle) {
    this.rotation = angle;
  };

  this.turn = function() {
    this.heading += this.rotation;
  };
}
