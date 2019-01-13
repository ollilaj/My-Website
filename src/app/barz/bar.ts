import Line from './line';

export default class Bar {

  public lines = [];

  public ctx;
  public startX;
  public startY;
  public endX;
  public endY;
  public dx;
  public dy;
  public color;
  public way;

  constructor(ctx, startX, startY, endX, endY, dx, dy, color, way) {
    this.ctx = ctx;
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.way = way;
  }

  createLines() : void {
    switch(this.way){
      case true:
        for(let i = 0; i < 15; i++) {
          this.lines.push(new Line(this.ctx, this.startX + (2 * i), this.startY, this.endX + (2 * i), this.endY, this.dx, this.dy, this.color));
        }
        break;
      case false:
        for(let i = 0; i < 15; i++) {
          this.lines.push(new Line(this.ctx, this.startX, this.startY + (2 * i), this.endX, this.endY + (2 * i), this.dx, this.dy, this.color));
        }
        break;
    }
  }

  animateBar() : void {
    for(let i = 0; i < this.lines.length; i++) {
      this.lines[i].animateLine();
    }
  }

}
