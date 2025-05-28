class GasStation extends Object {
  constructor(container, x, y, width, height, bg) {
    super(container, x, y, width, height, 0, 0, "", bg);

    // 충돌 확인을 위한 임시 배경
    this.bg = bg;

    this.div.style.background = bg;
  }
}
