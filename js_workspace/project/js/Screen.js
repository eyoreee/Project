class Screen extends Object {
  constructor(
    container,
    x,
    y,
    width,
    height,
    divTxt,
    btTxt1,
    btX1,
    btY1,
    btTxt2,
    btX2,
    btY2,
    font
  ) {
    super(
      container,
      x,
      y,
      width,
      height,
      0,
      0,
      "",
      divTxt,
      btTxt1,
      btX1,
      btY1,
      btTxt2,
      btX2,
      btY2,
      font
    );

    this.divTxt = divTxt;
    this.btTxt1 = btTxt1;
    this.btX1 = btX1;
    this.btY1 = btY1;

    this.btTxt2 = btTxt2;
    this.btX2 = btX2;
    this.btY2 = btY2;

    this.div.style.background = "rgb(222, 222, 222)";
    this.div.style.position = "relative";
    this.div.style.opacity = "0.9";
    this.div.style.paddingTop = "40px";
    this.div.style.border = "10px solid #13612d";
    this.div.style.borderRadius = "20px";
    this.div.style.fontSize = `${font}px`;
    this.div.style.fontFamily = "'Jersey 10', sans-serif";
    this.div.style.textAlign = "center";
    this.div.style.zIndex = "1000";
    this.div.innerText = divTxt;

    this.bt1 = document.createElement("Button");
    this.bt1.style.left = btX1 + "px";
    this.bt1.style.top = btY1 + "px";
    this.bt1.style.position = "absolute";
    this.bt1.style.color = "#232323";
    this.bt1.style.background = "none";
    this.bt1.style.fontSize = "50px";
    this.bt1.style.fontFamily = "'Jersey 10', sans-serif";
    this.bt1.style.textAlign = "center";
    this.bt1.style.border = "none";
    this.bt1.innerText = btTxt1;
    this.div.appendChild(this.bt1);

    this.bt2 = document.createElement("Button");
    this.bt2.style.left = btX2 + "px";
    this.bt2.style.top = btY2 + "px";
    this.bt2.style.position = "absolute";
    this.bt2.style.color = "#232323";
    this.bt2.style.background = "none";
    this.bt2.style.fontSize = "50px";
    this.bt2.style.fontFamily = "'Jersey 10', sans-serif";
    this.bt2.style.textAlign = "center";
    this.bt2.style.border = "none";
    this.bt2.innerText = btTxt2;
    this.div.appendChild(this.bt2);

    // 기본 버튼 메서드
    this.bt1.addEventListener("click", (e) => {
      this.bt1.remove();
      this.div.remove();

      if (e.target.innerText === "Restart") {
        resetGame();
        stage = 0;
        score = 0;
        createObject();
        setPassenger();
        play();
      } else if (e.target.innerText === "Next Stage") {
        stage++;
        createObject();
        setPassenger();
        play();
      }
    });

    // 추가 버튼 메서드
    this.bt2.addEventListener("click", (e) => {
      this.bt2.remove();
      this.div.remove();

      if (e.target.innerText === "Ranking") {
        setScreen("addRank");
      }
    });

    this.bt1.addEventListener("mouseover", (e) => {
      this.bt1.style.color = "#b70000";
    });
    this.bt2.addEventListener("mouseover", (e) => {
      this.bt2.style.color = "#b70000";
    });
    this.bt1.addEventListener("mouseout", (e) => {
      this.bt1.style.color = "#232323";
    });
    this.bt2.addEventListener("mouseout", (e) => {
      this.bt2.style.color = "#232323";
    });
  }
}
