function Laser(pos, angle) {
  this.pos = createVector(pos.x, pos.y);
  this.vel = p5.Vector.fromAngle(angle, 10);

  this.update = () => {
    this.pos.add(this.vel);
  };

  this.render = () => {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  };

  this.hits = asteroid => {
    let d = this.pos.dist(asteroid.pos);
    return d < asteroid.r;
  };

  this.offscreen = () => {
    return (
      this.pos.x > width ||
      this.pos.x < 0 ||
      this.pos.y > height ||
      this.pos.y < 0
    );
  };

}
