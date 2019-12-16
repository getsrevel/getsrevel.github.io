function Stats() {
  this.score = 0;
  this.lives = 3;

  this.increasePoints = () => {
    this.score++;
  };

  this.die = () => {
    if (this.lives > 0) {
      this.lives--;
    }
  };

  this.isGameOver = () => this.lives <= 0;

  this.render = () => {
    push();
    translate(20, 10);

    fill("red");
    textSize(30);
    text(`Score: ${this.score}`, 0, 30);
    text(`Lives: ${this.lives}`, 0, 70);

    if (this.isGameOver()) {
      translate(width / 2, height / 2);
      textAlign(CENTER, CENTER);
      textSize(60);
      text(`Game Over`, 0, -50);
    }

    pop();
  };
}
