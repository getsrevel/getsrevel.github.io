class StickMan {
  constructor(x, minHeight, jumpSpeed, color) {
    this.x = x;
    this.jumpSpeed = jumpSpeed;
    this.minHeight = minHeight;
    this.height = minHeight;
    this.color = color;
    this.y = height / 2;
    this.vy = 0;
    this.gravity = 1.5;
  }

  jump() {
    if (this.y == height) {
      this.vy = - this.jumpSpeed;
    }
  }

  update() {
    // fall down
    this.y += this.vy;
    // increase fall speed due to gravity
    this.vy += this.gravity;
    // stop at floor
    this.y = constrain(this.y, -3000, height);
    // change the size
    this.height = map(mouseX, 0, width, this.minHeight, this.minHeight * 6);
  }

  render() {
    // compute the dimensions of the body parts
    const headDiameter = this.height * 0.2;
    const headRadius = headDiameter / 2;
    const bodyHeight = (this.height - headDiameter) * 0.4;
    const legHeight = this.height - headDiameter - bodyHeight;

    const legWidth = headDiameter * 0.5;
    const armWidth = headDiameter * 0.75;
    const armHeight = headDiameter * 1.8;
    const neckLength = headDiameter * 0.3;

    const headX = this.x;
    const headY = this.y - this.height + headRadius;

    // draw the stickman
    push();
    fill(this.color);
    strokeWeight(3);
    // head
    circle(headX, headY, headDiameter);
    // body
    line(headX, headY + headRadius, headX, headY + headRadius + bodyHeight);
    // arms
    const shoulderY = headY + headRadius + neckLength;
    line(headX, shoulderY, headX - armWidth, shoulderY + armHeight);
    line(headX, shoulderY, headX + armWidth, shoulderY + armHeight);
    // legs
    const legY = headY + headRadius + bodyHeight;
    line(headX, legY, headX - legWidth, legY + legHeight);
    line(headX, legY, headX + legWidth, legY + legHeight);
    pop();
  }
}
