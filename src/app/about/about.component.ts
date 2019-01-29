import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public aboutItems = [];

  constructor() { }

  ngOnInit() {
    this.aboutItems = [
      {
        "img": "assets/design.png",
        "title": "Design",
        "description": "The website design process starts with sketched page layouts and wire-frames. " +
        "Pending your feedback, digital blueprints are then created, incorporating your company's " +
        "brand and personalisation. "
      },
      {
        "img": "assets/code.png",
        "title": "Development",
        "description": "The development process involves taking the graphical " +
        "elements defined in the design process and coding them into a clean, responsive web app, " +
        "using HTML, CSS, and Javascript"
      },
      {
        "img": "assets/cloud.png",
        "title": "Hosting",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
          "Aliquam elementum ex eu porttitor molestie. Donec luctus ante nec ex " +
          "faucibus volutpat. Integer nec commodo quam. Vestibulum ex lorem, " +
          "auctor eu consectetur sed."
      }
    ]
  }

}
