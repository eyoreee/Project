class AddRank extends Screen {
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
    textField
  ) {
    super(
      container,
      x,
      y,
      width,
      height,
      divTxt,
      btTxt1,
      btX1,
      btY1,
      "",
      0,
      0,
      "70",
      textField
    );

    this.x = textField;

    this.textField = document.createElement("input");
    this.textField.setAttribute("type", "text");
    this.textField.setAttribute("maxlength", "8");
    this.textField.style.left = 47 + "px";
    this.textField.style.top = 138 + "px";
    this.textField.style.width = 300 + "px";
    this.textField.style.height = 80 + "px";
    this.textField.style.position = "absolute";
    this.textField.style.color = "#232323";
    this.textField.style.fontSize = "50px";
    this.textField.style.fontFamily = "'Jersey 10', sans-serif";
    this.textField.style.textAlign = "center";
    this.textField.style.border = "none";
    this.textField.style.borderRadius = "30px";
    this.div.appendChild(this.textField);

    this.bt1.addEventListener("click", async () => {
      await saveRank(this.textField.value, score);
      setScreen("submit");
    });
  }
}
