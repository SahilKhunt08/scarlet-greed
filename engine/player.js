class Player {
  constructor (x, y, s, v) {
    this.pos = createVector(x, y);
    this.angle = 0;
    this.bullets = [];
    this.s = s;
    this.v = 3.5;
    this.color = "white";
    this.accent = "black";

    this.knockback = false;
    this.knockbackFactor = 1;
    this.knockbackDecrease = 0.01;
    this.knockbackPower = 1;
  }
  
  render () {//
    push();
    noStroke();
    rectMode(CENTER);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.color);
    rect(0, 0, this.s, this.s, 5);
    fill(this.accent);
    triangle(-10, -10, 10, 0, -10, 10);
    pop();
  }

  update () {
    let xSpeed = 0;
    let ySpeed = 0;
    var moveLeft = false, moveRight = false, moveUp = false, moveDown = false;
    if (keyIsDown(65)) {moveLeft = true}
    if (keyIsDown(68)) {moveRight = true}
    if (keyIsDown(87)) {moveUp = true}
    if (keyIsDown(83)) {moveDown = true}
    
    if(!(moveLeft && moveRight)){
      if(moveLeft) {
        xSpeed = -this.v;
      } else if (moveRight){
        xSpeed = this.v;
      }
    }

    if(!(moveUp && moveDown)){
      if(moveUp) {
        ySpeed = -this.v;
      } else if (moveDown) {
        ySpeed = this.v;
      }
    }

    this.pos.add(xSpeed, ySpeed);
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
  }
}