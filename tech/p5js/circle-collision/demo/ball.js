class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(12, 3)
    this.r = 40
    this.isColliding = false
    this.collisionHandled = false
  }

  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  edges() {
    const x = this.pos.x;
    if (x - this.r < 0 || x + this.r >= width) {
      this.vel.x = -this.vel.x
    }
    const y = this.pos.y;
    if (y - this.r < 0 || y + this.r >= height) {
      this.vel.y = -this.vel.y
    }
  }

  render() {
    push();
    if (this.isColliding) {
      strokeWeight(5)
    }
    if (this.collisionHandled) {
      fill('green')
    }
    circle(this.pos.x, this.pos.y, this.r * 2);
    pop();
  }
}