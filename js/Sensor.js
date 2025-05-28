class Sensor extends Object {
  constructor(container, x, y, width, height, taxi) {
    super(container, x, y, width, height, 0, 0, "", taxi);

    this.taxi = taxi;
    this.senX;
    this.senY;
  }
  setSensorPos(tempX, tempY) {}
}
