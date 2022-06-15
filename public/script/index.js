startBtn.addEventListener("click", (e) => {
  startScreen.style.display = "none";
  road.style.display = "block";
  restartScreen.style.display = "none";
  scoreContainer.style.display = "block";
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

function restart() {
  startScreen.style.display = "none";
  road.style.display = "none";
  restartScreen.style.display = "block";
  endScore.innerHTML = `${score}`;
}

function removeObstacle(obs) {
  if (obs.currentY >= 615) {
    obsList.shift();
    score += 1;
  }
}
scoreValue.innerHTML = `${score}`;

let obsList = [];
setInterval(() => {
  obsList.push(new Obstacle());
}, 2500);
setInterval(() => {
  for (i = 1; i <= obsList.length - 1; i++) {
    scoreValue.innerHTML = `${score}`;
    obsList[i].move();
    removeObstacle(obsList[i]);
    let collision = detectCollision(obsList[i]);
    if (collision) restart();
  }
}, 1000 / 60);

function detectCollision(obstacle) {
  if (
    player.currentX + width >= obstacle.currentX &&
    player.currentX <= obstacle.currentX + width &&
    player.currentY + height >= obstacle.currentY &&
    player.currentY <= obstacle.currentY + height
  ) {
    return true;
  }
}
