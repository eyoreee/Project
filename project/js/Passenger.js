class Passenger extends Object {
  constructor(container, x, y, width, height, img, time) {
    super(container, x, y, width, height, 0, 0, img, time);

    this.time = time;
  }
}
