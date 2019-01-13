import { Component, OnInit } from '@angular/core';
import Barz from '../barz/barz';

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private canvas;

  constructor() { }

  ngOnInit() {
    //particlesJS.load('particles-js', 'assets/particles.json', null);
    this.canvas = document.getElementById("my-canvas");

    // Only way I could correctly set height of canvas
    this.canvas.setAttribute("style", "width:" + window.innerWidth + "px");
    this.canvas.setAttribute("style", "height:" + window.innerHeight + "px");

    this.createBarz();
  }

  createBarz() : void {
    let ctx = this.canvas.getContext("2d");
    let myBarz = new Barz(ctx);
    myBarz.draw();
  }
}
