class Player {
  constructor() {
    this.car = playerCar;
    this.car.style.left = "65px";
    this.currentX = 65;
    this.lane = 0;
    this.moveFrame = 1;
    this.car.style.position = "absolute";
    this.car.style.width = width + "px";
    this.car.style.height = height + "px";
    this.car.style.backgroundImage = "url('./images/player.png')";
    this.car.style.backgroundSize = "70px 130px";
    this.car.style.backgroundRepeat = "no-repeat";
    this.car.style.top = "480px";
    this.currentY = 480;
  }
  moveRight() {
    if (this.lane != LANES - 1) {
      let totalMove = 0;
      this.lane += 1;
      var animation = setInterval(() => {
        this.currentX += this.moveFrame;
        totalMove += this.moveFrame;
        this.car.style.left = this.currentX + "px";
        if (totalMove >= 200) {
          clearInterval(animation);
        }
      }, 1);
    }
  }
  moveLeft() {
    if (this.lane != 0) {
      let totalMove = 0;
      this.lane -= 1;
      var animation = setInterval(() => {
        this.currentX -= this.moveFrame;
        totalMove += this.moveFrame;
        playerCar.style.left = this.currentX + "px";
        if (totalMove >= 200) {
          clearInterval(animation);
        }
      }, 1);
    }
  }
}
