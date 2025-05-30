class Taxi extends Object {
  constructor(container, x, y, width, height, velX, velY, img) {
    super(container, x, y, width, height, velX, velY, img);

    // 3px 두께의 센서 생성
    this.leftSensor = new LeftSensor(
      document.getElementById("content"),
      0,
      3,
      3,
      this.height - 6,
      this
    );
    this.upSensor = new UpSensor(
      document.getElementById("content"),
      3,
      0,
      this.width - 6,
      3,
      this
    );
    this.rightSensor = new RightSensor(
      document.getElementById("content"),
      this.width - 3,
      3,
      3,
      this.height - 6,
      this
    );
    this.downSensor = new DownSensor(
      document.getElementById("content"),
      3,
      this.height - 3,
      this.width - 6,
      3,
      this
    );
  }

  // 택시 물리량 변화 설정
  tick() {
    // 물리량 변화 전 충돌 체크. 각 방향 이동 시 충돌체크, 부딪히면 물리량 변화 없음
    if (this.velY < 0 && this.upSensor.setSensorPos(3, 0)) return;
    if (this.velY > 0 && this.downSensor.setSensorPos(3, this.height - 3))
      return;
    if (this.velX < 0 && this.leftSensor.setSensorPos(0, 3)) return;
    if (this.velX > 0 && this.rightSensor.setSensorPos(this.width - 3, 3))
      return;

    this.x += this.velX;
    this.y += this.velY;
  }

  // 택시 물리량 변화 적용
  render() {
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
  }

  // 택시 이미지 회전 설정
  rotate(xory, timer) {
    if (timer != null)
      if (xory == "X")
        this.velX < 0
          ? (this.div.style.transform = "rotate(90deg)")
          : (this.div.style.transform = "rotate(-90deg)");
      else if (xory == "Y")
        this.velY < 0
          ? (this.div.style.transform = "rotate(180deg)")
          : (this.div.style.transform = "rotate(0deg)");
  }
}
