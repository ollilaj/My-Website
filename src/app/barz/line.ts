export default class Line {

  public ctx;
  public startX;
  public startY;
  public endX;
  public endY;
  public dx;
  public dy;
  public color;

  constructor(ctx, startX, startY, endX, endY, dx, dy, color) {
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() : void {
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(this.endX, this.endY);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  };

  animateLine() : void {
    this.draw();
    this.startX += this.dx;
    this.startY += this.dy;
    this.endX += this.dx;
    this.endY += this.dy;
  };

}
