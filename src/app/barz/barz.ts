import Bar from './bar';

export default class Barz {

  private ctx;
  private topBars;
  private bottomBars;

  constructor(ctx) {
    this.ctx = ctx;
  }

  initializeVariables() : void {
    this.topBars = [
      new Bar(this.ctx, -130, 370, 370, -130, 5, -5, "red", true),
      new Bar(this.ctx, -160, 340, 340, -160, -5, 5, "black", false),
      new Bar(this.ctx, -190, 310, 310, -190, 5, -5, "red", true),
      new Bar(this.ctx, -220, 280, 280, -220, -5, 5, "black", false),
    ];
    this.bottomBars = [
      new Bar(this.ctx, window.innerWidth-370, window.innerHeight+130, window.innerWidth+130, window.innerHeight-370, -5, 5, "red", true),
      new Bar(this.ctx, window.innerWidth-340, window.innerHeight+160, window.innerWidth+160, window.innerHeight-340, 5, -5, "black", false),
      new Bar(this.ctx, window.innerWidth-310, window.innerHeight+190, window.innerWidth+190, window.innerHeight-310, -5, 5, "red", true),
      new Bar(this.ctx, window.innerWidth-280, window.innerHeight+220, window.innerWidth+220, window.innerHeight-280, 5, -5, "black", false),
    ];
  }

  createBars() : void {
    for(let a = 0; a < this.topBars.length; a++) {
      this.topBars[a].createLines();
    }
    for(let b = 0; b < this.bottomBars.length; b++) {
      this.bottomBars[b].createLines();
    }
  }

  animate() : void {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for(let i = 0; i < this.topBars.length; i++) {
      this.topBars[i].animateBar();
      if((this.topBars[i].lines[0].endX > 1000) || (this.topBars[i].lines[0].startX < -775)) {
        for(let j = 0; j < this.topBars[i].lines.length; j++) {
          this.topBars[i].lines[j].dx = -this.topBars[i].lines[j].dx;
          this.topBars[i].lines[j].dy = -this.topBars[i].lines[j].dy;
        }
      }
    }
    for(let k = 0; k < this.bottomBars.length; k++) {
      this.bottomBars[k].animateBar();
      if((this.bottomBars[k].lines[0].endX > window.innerWidth + 1000) || (this.bottomBars[k].lines[0].startX < window.innerWidth - 775)) {
        for(let l = 0; l < this.bottomBars[k].lines.length; l++) {
          this.bottomBars[k].lines[l].dx = -this.bottomBars[k].lines[l].dx;
          this.bottomBars[k].lines[l].dy = -this.bottomBars[k].lines[l].dy;
        }
      }
    }
  }

  draw() : void {
    this.initializeVariables();
    this.createBars();
    this.animate();
  }

}
