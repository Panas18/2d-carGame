const gameContainer = document.querySelector(".game-container");
const playerCar = document.querySelector(".player");
const road = document.querySelector(".road");
const startBtn = document.querySelector(".startBtn");
const restartBtn = document.querySelector(".restart");
const restartScreen = document.querySelector(".end-screen");
const FPS = 60;
const startScreen = document.querySelector(".start-screen");
const LANES = 3;

startBtn.addEventListener("click", (e) => {
  startScreen.style.display = "none";
  road.style.display = "block";
  restartScreen.style.display = "none";
});

restartBtn.addEventListener("click", (e) => {
  startScreen.style.display = "none";
  road.style.display = "block";
  restartScreen.style.display = "none";
});

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
    this.car.style.top = "480px";
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

var player = new Player();

document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") {
    player.moveRight();
  } else if (e.key == "ArrowLeft") {
    player.moveLeft();
  }
});

function detectCollision(obstacle) {
  let obstaclePosn = obstacle.currentY + 130;
  console.log(obstaclePosn);
  if (player.lane === obstacle.spawnLane) {
    if (obstaclePosn >= 485) {
      restart();
    }
  }
}

//  obsList = [];
//  for (i = 0; i < 3; i++) {
//    obstacle = new Obstacle(i);
//    obstacle.create();
//    obsList.push(obstacle);
//  }

obstacle = new Obstacle();
function init() {
  setInterval(() => {
    obstacle.move();
    detectCollision(obstacle);
  }, 1000 / 60);
}

function restart() {
  startScreen.style.display = "none";
  road.style.display = "none";
  restartScreen.style.display = "block";
}

init();
// obsList.forEach((obstacle) => {
//   setInterval(() => {
//     obstacle.move();
//     detectCollision(obstacle);
//     if (obstacle.currentY >= 780) {
//       obstacle.car.style.top = "-150px";
//     }
//   }, 1000 / 60);
// });

// obsArray = [];
// setTimeout(() => {
//   setInterval(() => {
//     console.log("creating new obstacle")
//     obsArray.push(new Obstacle());
//     obsArray.forEach((obstacle) => {
//       obstacle.create();
//       obstacle.move();
//       console.log("moving obstacle")
//     });
//   }, 3000);
// }, 1000 / 60);
