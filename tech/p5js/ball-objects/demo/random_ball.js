class RandomBouncingBall extends BouncingBall {
  constructor(pos) {
    super(pos);
    this.lineWidth = random(1,20)
    this._generateColors();
  }

  _generateColors() {
    this.strokeColor = color(random(255), random(255), random(255));
    this.fillColor = color(random(255), random(255), random(255));
  }

  render() {
    push()
    stroke(this.strokeColor);
    strokeWeight(this.lineWidth);
    fill(this.fillColor);
    super.render()
    pop()
  }
}
