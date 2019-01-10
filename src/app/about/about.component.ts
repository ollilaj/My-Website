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
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
          "Aliquam elementum ex eu porttitor molestie. Donec luctus ante nec ex " +
          "faucibus volutpat. Integer nec commodo quam. Vestibulum ex lorem, " +
          "auctor eu consectetur sed."
      },
      {
        "img": "assets/code.png",
        "title": "Development",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
          "Aliquam elementum ex eu porttitor molestie. Donec luctus ante nec ex " +
          "faucibus volutpat. Integer nec commodo quam. Vestibulum ex lorem, " +
          "auctor eu consectetur sed."
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
