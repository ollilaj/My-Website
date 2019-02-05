import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public serviceItems = [];

  constructor() { }

  ngOnInit() {
    this.serviceItems = [
      {
        "img": "assets/design.jpg",
        "title": "Design",
        "description": "The website design process starts with sketched page layouts and wire-frames. " +
        "Pending your feedback, digital blueprints are then created, incorporating your company's " +
        "brand and personalisation. "
      },
      {
        "img": "assets/code.jpg",
        "title": "Development",
        "description": "The development process involves taking the graphical " +
        "elements defined in the design process and coding them into a clean, responsive web app, " +
        "using HTML, CSS, and JavaScript. "
      },
      {
        "img": "assets/support.jpg",
        "title": "Support",
        "description": "After the development process, I can provide hosting for your website and make " +
        "any changes that you would like upon filing a feature request. "
      }
    ]
  }

}
