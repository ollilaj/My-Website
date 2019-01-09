import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);

    // Only way I could correctly set height of canvas
    let canvas = document.getElementById("particles-js");
    canvas.setAttribute("style", "width:" + window.innerWidth + "px");
    canvas.setAttribute("style", "height:" + window.innerHeight + "px");
  }

}
