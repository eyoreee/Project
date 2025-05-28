class Screen extends Object {
  constructor(container, x, y, width, height, divTxt, btTxt, btX, btY) {
    super(container, x, y, width, height, 0, 0, "", divTxt, btTxt, btX, btY);

    this.divTxt = divTxt;
    this.btTxt = btTxt;
    this.btX = btX;
    this.btY = btY;

    this.div.style.background = "rgb(222, 222, 222)";
    this.div.style.position = "relative";
    this.div.style.opacity = "0.9";
    this.div.style.paddingTop = "40px";
    this.div.style.border = "10px solid #13612d";
    this.div.style.borderRadius = "20px";
    this.div.style.fontSize = "70px";
    this.div.style.fontFamily = "'Jersey 10', sans-serif";
    this.div.style.textAlign = "center";
    this.div.style.zIndex = "1000";
    this.div.innerText = divTxt;

    this.bt = document.createElement("Button");
    this.bt.style.left = btX + "px";
    this.bt.style.top = btY + "px";
    this.bt.style.position = "absolute";
    this.bt.style.color = "#232323";
    this.bt.style.background = "none";
    this.bt.style.fontSize = "50px";
    this.bt.style.fontFamily = "'Jersey 10', sans-serif";
    this.bt.style.textAlign = "center";
    this.bt.style.border = "none";
    this.bt.style.class = "button";
    this.bt.innerText = btTxt;
    this.div.appendChild(this.bt);

    this.bt.addEventListener("click", (e) => {
      this.bt.remove();
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
  }
}
