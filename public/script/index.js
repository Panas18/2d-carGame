const gameContainer = document.querySelector(".game-container");
const playerCar = document.querySelector(".player");
const road = document.querySelector(".road");
const FPS = 60;
const LANES = 3;

class Player {
  constructor() {
    this.car = playerCar;
    this.currentX = this.car.offsetLeft;
    this.lane = 1;
    this.moveFrame = 1;
  }
  moveRight() {
    if (this.lane != LANES) {
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
    if (this.lane != 1) {
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

player = new Player();

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    player.moveRight();
  } else if (e.key == "ArrowLeft") {
    player.moveLeft();
  }
});
