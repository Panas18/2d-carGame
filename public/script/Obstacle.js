class Obstacle {
  constructor(lane) {
    this.spawnLane = lane;
    this.currentX = this.spawnLane * 200 + 65;
    this.move = false;

    // moves the car
    if (this.move) {
      setInterval(() => {
        this.currentY += 1;
        this.car.style.top = `${this.currentY}px`;
      }, 1000 / 60);
    }
  }

  create() {
    this.car = document.createElement("div");
    road.appendChild(this.car);
    this.car.style.position = "absolute";
		this.car.style.top = `${-this.car.style.width}px`
    this.car.style.width = 60 + "px";
    this.car.style.height = 150 + "px";
    this.car.style.border = "1px solid red";
    this.car.style.left = `${this.currentX}px`;
		console.log(this.car.style.top)
  }
}

car1 = new Obstacle((lane = 1));
car1.create()
car2 = new Obstacle((lane = 2));
car3 = new Obstacle((lane = 3));
