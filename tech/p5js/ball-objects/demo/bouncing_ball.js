class BouncingBall extends Ball {
  update() {
    if (this.pos.x + this.r > width || this.pos.x - this.r < 0) {
      this.speed.x = -this.speed.x
    }
    if (this.pos.y + this.r > height || this.pos.y - this.r < 0) {
      this.speed.y = -this.speed.y
    }

    super.update()
  }
}