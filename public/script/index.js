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
  // console.log(obstaclePosn);
  if (player.lane === obstacle.spawnLane) {
    if (obstaclePosn >= 485) {
      restart();
    }
  }
}

let obsList = [];

setInterval(() => {
  obsList.push(new Obstacle());
}, 2500);

setInterval(() => {
  for (i = 1; i <= obsList.length; i++) {
    obsList[i].move();
    removeObstacle(obsList);
    // detectCollision(obsList[i]);
  }
}, 1000 / 60);

function restart() {
  startScreen.style.display = "none";
  road.style.display = "none";
  restartScreen.style.display = "block";
}

function removeObstacle(obsList) {
  if (obsList.length >= 6)
    for (i = 0; i < 3; i++) {
      obsList.shift();
    }
}
