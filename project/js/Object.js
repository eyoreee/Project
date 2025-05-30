class Object {
  constructor(container, x, y, width, height, velX, velY, img) {
    this.container = container;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velX = velX;
    this.velY = velY;
    this.img = img;

    this.div = document.createElement("div");
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.div.style.position = "absolute";
    this.div.style.backgroundImage = this.img;
    this.div.style.backgroundSize = `${this.width}px ${this.height}px`;
    // this.div.style.border = "1px solid black";
    this.container.appendChild(this.div);
  }
}
