class Ship {
  constructor() {
    this.position = createVector(0, 0);
    this.velocity = createVector(0, 0);
  }

  jumpTo(x, y) {
    this.position.set(x, y);
  }

  render() {
    push();
    const shipWidth = 20;
    const shipLength = 30;
    const engineHeight = shipLength / 4;
    const engineWidth = shipWidth / 4;
    stroke(0);
    fill("gray");
    translate(this.position.x, this.position.y);
    rotate(this.velocity.heading());

    // Draw ship body
    triangle(0, -shipWidth / 2, shipLength, 0, 0, shipWidth / 2);
    // Draw engine
    triangle(
      -engineHeight,
      -engineWidth / 2,
      0,
      0,
      -engineHeight,
      engineWidth / 2
    );
    pop();
  }

  debugRender() {
    const posBase = createVector(0, 0);
    const posColor = color("green");
    drawArrow(posBase, this.position, posColor);
    const velBase = this.position;
    const velColor = color("red");
    drawArrow(velBase, this.velocity, velColor);

    push();
    // Speed indicator
    const rh = 28;
    fill("gray");
    rect(0, 0, this.velocity.mag(), rh);
    fill(250);
    stroke(10);
    textSize(rh);
    text(`Magnitude`, 20, rh - 4);

    translate(0, rh);
    const heading = this.velocity.heading();
    const barX = map(heading, -PI, PI, -width / 2, width / 2);
    fill("red");
    rect(width / 2, 0, barX, rh);
    fill(250);
    stroke(10);
    textSize(rh);
    text(`Heading ${nfc(heading, 2)}`, 20, rh - 4);
    pop();
  }
}
