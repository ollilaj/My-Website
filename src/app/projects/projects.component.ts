import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects = [];

  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        "name": "Jumla",
        "image": "assets/jumla.png",
        "description": "Jumla is a personal project that I developed. It aggregates data from " +
          "multiple social media outlets including Twitter and Instagram as well as from news " +
          "sources and centralizes the data into a single feed.",
        "link": "https://jakeollila.space"
      }
    ]
  }

}
