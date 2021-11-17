class Ball {
  constructor(position) {
    this.r = random(5, 40)
    this.pos = position.copy()

    this.speed = createVector()
    this.speed.x = random(-20,20)
    this.speed.y = random(-20,20)
  }

  update() {
    this.pos.add(this.speed)
  }

  render() {
    circle(this.pos.x, this.pos.y, this.r * 2)
  }
}
