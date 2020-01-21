function Asteroid(pos, r) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  if (r) {
    this.r = r * 0.5;
  } else {
    this.r = random(15, 50);
  }

  this.vel = p5.Vector.random2D();
  this.total = floor(random(5, 15));
  this.offsets = [];

  for (let i = 0; i < this.total; i++) {
    this.offsets.push(random(0.5, 1.5));
  }

  this.update = () => {
    this.pos.add(this.vel);
    this.edges();
  };

  this.render = () => {
    push();
    noFill();
    stroke(255);
    translate(this.pos.x, this.pos.y);
    // circle(0, 0, this.r * 2);

    beginShape();
    for (let i = 0; i < this.total; i++) {
      const angle = map(i, 0, this.total, 0, TWO_PI);
      const r = this.r * this.offsets[i];
      const x = r * cos(angle);
      const y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);

    pop();
  };

  this.breakup = () => {
    let newA = [];
    newA.push(new Asteroid(this.pos, this.r));
    newA.push(new Asteroid(this.pos, this.r));
    return newA;
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
}
