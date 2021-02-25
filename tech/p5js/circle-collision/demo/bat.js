class Bat {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.r = 60
  }

  update() {
    this.pos = createVector(mouseX, mouseY)
  }

  render() {
    push();
    fill('red')
    circle(this.pos.x, this.pos.y, this.r * 2);
    pop();
  }

  collision(other) {
    const distance = this.pos.dist(other.pos);

    other.isColliding = distance < this.r + other.r
    if (other.isColliding) {
      if (!other.collisionHandled) {
        this._resolveCollision(other);
        other.collisionHandled = true;
      }
    } else {
      other.collisionHandled = false;
    }
  }

  _resolveCollision(other) {
    const surfaceNormal = p5.Vector.sub(this.pos, other.pos);
    other.vel.reflect(surfaceNormal);
  }
}
