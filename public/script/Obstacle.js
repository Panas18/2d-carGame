class Obstacle {
  constructor(lane) {
    this.spawnLane = lane;
    // this.spawnLane = genRandom(3, 0);
    this.currentX = this.spawnLane * 200 + 65;
    this.ismoving = false;
  }

  create() {
    this.car = document.createElement("div");
    road.appendChild(this.car);
    this.car.style.position = "absolute";
    this.car.style.width = 70 + "px";
    this.car.style.height = 130 + "px";
    this.car.style.left = `${this.currentX}px`;
    this.car.style.backgroundImage = "url('./images/obstacle.png')";
    this.car.style.backgroundSize = "70px 130px";
    this.car.style.backgroundRepeat = "no-repeat";
    this.car.style.top = `-150px`;
  }

  move() {
    this.ismoving = true;
    this.currentY = this.car.offsetTop;
    this.currentY += 3;
    this.car.style.top = `${this.currentY}px`;
  }

  stop() {
    this.ismoving = false;
  }
}

//generate random 3 obstacles
