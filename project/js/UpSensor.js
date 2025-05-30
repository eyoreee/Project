class UpSensor extends Sensor {
  constructor(container, x, y, width, height, taxi) {
    super(container, x, y, width, height, taxi);
  }

  // 센서의 x, y값을 받아 충돌을 체크하는 함수
  setSensorPos(tempX, tempY) {
    // 택시의 좌표에 센서의 x, y값을 더해 센서의 실제 좌표값 구하기
    this.senX = this.taxi.x + tempX;
    this.senY = this.taxi.y + tempY;

    // 센서의 좌표를 배열 1개의 크기 값으로 나눠 어떤 행과 열에 속해있는지 구하기
    const startCol = Math.floor(this.senX / 10);
    const endCol = Math.floor((this.senX + this.width - 1) / 10);
    const sensorRow = Math.floor(this.senY / 10);

    // 센서가 속한 칸을 기준으로 3*3 범위 체크
    for (let i = sensorRow - 1; i <= sensorRow + 1; i++) {
      for (let j = startCol; j <= endCol; j++) {
        // 블럭배열이 false(0)이 아니고 충돌이 일어났을 때 수행
        if (
          blockArray[i][j] &&
          collisionCheckBySensor(this, blockArray[i][j])
        ) {
          this.taxi.y = blockArray[i][j].y + blockArray[i][j].height;
          this.taxi.velY = 0;
          return true; // 충돌 했음
        }
      }
    }
    return false; // 충돌하지 않았음
  }
}
