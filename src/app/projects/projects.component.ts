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
        "tags": "Design / Front End Development / Back End Development",
        "image": "assets/jumla-collage.png",
        "description": "Jumla is the ultimate place to keep up to date with favorite celebrities. " +
          "Explore recent news and their social media prescence in this all-encompassing web app.",
        "link": "https://jakeollila.space"
      }
    ]
  }

}
