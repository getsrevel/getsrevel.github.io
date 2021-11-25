class Shape {
  constructor(startPos, endPos) {
    this.startPos = startPos.copy()
    this.endPos = endPos.copy()
  }

  render() {
    push()
    stroke('navy')
    strokeWeight(5)
    line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y)
    pop()
  }
}