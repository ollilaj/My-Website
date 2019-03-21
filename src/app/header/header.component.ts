import {Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import Barz from '../barz/barz';

declare let particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('myCanvas')
  canvas: ElementRef;

  @ViewChild('particleJs')
  particleJs: ElementRef;

  @ViewChild('headerImage')
  headerImage: ElementRef;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //particlesJS.load('particles-js', 'assets/particles.json', null);
    this.headerImage.nativeElement.setAttribute("style", "width:" + window.innerWidth + "px");
    this.headerImage.nativeElement.setAttribute("style", "height:" + window.innerHeight + "px");
    //this.createBarz();
  }

  createBarz() : void {
    let ctx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

    // Used to size canvas and display correctly
    this.canvas.nativeElement.width = window.innerWidth * 2;
    this.canvas.nativeElement.height = window.innerHeight * 2;
    this.canvas.nativeElement.setAttribute("style", "width:" + window.innerWidth+ "px");
    this.canvas.nativeElement.setAttribute("style", "height:" + window.innerHeight + "px");
    ctx.scale(2,2);

    let myBarz = new Barz(ctx);
    myBarz.draw();
  }

  onResize(event) : void {
    //particlesJS.load('particles-js', 'assets/particles.json', null);
    //this.headerImage.nativeElement.setAttribute("style", "width:" + event.target.innerWidth + "px");
    //this.headerImage.nativeElement.setAttribute("style", "height:" + event.target.innerHeight + "px");
  }

}
