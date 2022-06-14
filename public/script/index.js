const gameContainer = document.querySelector(".game-container");
const playerCar = document.querySelector(".player");
const road = document.querySelector(".road");
const FPS = 60;
const LANES = 3;

class Player {
  constructor() {
    this.car = playerCar;
    this.car.style.left = "65px";
    this.currentX = 65;
    this.lane = 0;
    this.moveFrame = 1;
    this.car.style.position = "absolute";
    this.car.style.width = 70 + "px";
    this.car.style.height = 130 + "px";
    this.car.style.backgroundImage = "url('./images/player.png')";
    this.car.style.backgroundSize = "70px 130px";
    this.car.style.backgroundRepeat = "no-repeat";
    this.car.style.top = "620px";
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
      var animation = setInterval(() => {
        this.currentX -= this.moveFrame;
        totalMove += this.moveFrame;
        playerCar.style.left = this.currentX + "px";
        if (totalMove >= 200) {
          this.lane -= 1;
          clearInterval(animation);
        }
      }, 1);
    }
  }
}

var player = new Player();

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    player.moveRight();
  } else if (e.key == "ArrowLeft") {
    player.moveLeft();
  }
});

obsList = [];
for (i = 0; i < 1; i++) {
  obstacle = new Obstacle(i);
  obstacle.create();
  obsList.push(obstacle);
}

obsList.forEach((obstacle) => {
  setInterval(() => {
    obstacle.move();
    detectCollision(obstacle);
    if (obstacle.currentY >= 700) {
      obstacle.car.style.top = "-150px";
    }
  }, 1000 / 60);
});

function detectCollision(obstacle) {
  let obstaclePosn = obstacle.currentY + 130;
  if (player.lane === obstacle.spawnLane) {
    if (obstaclePosn >= 620) {
      console.log("collision");
    }
  }
}
