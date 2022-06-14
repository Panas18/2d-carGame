class Obstacle {
  constructor() {
    // this.spawnLane = lane;
    this.car = document.createElement("div");
    road.appendChild(this.car);
    this.spawnLane = genRandom(3, 0);
    this.currentX = this.spawnLane * 200 + 65;
    this.ismoving = false;
    this.car.style.position = "absolute";
    this.car.style.width = 70 + "px";
    this.car.style.height = 130 + "px";
    this.car.style.left = `${this.currentX}px`;
    this.car.style.backgroundImage = "url('./images/obstacle.png')";
    this.car.style.backgroundSize = "70px 130px";
    this.car.style.backgroundRepeat = "no-repeat";
    this.car.style.top = -150 + "px";
  }

  move() {
    this.currentY = this.car.offsetTop;
    this.currentY += 3;
    this.car.style.top = `${this.currentY}px`;
    if (this.currentY >= 615) {
      this.car.style.top = "-150px";
    }
  }
}
