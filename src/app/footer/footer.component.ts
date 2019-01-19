import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public footerItems = [];

  constructor() { }

  ngOnInit() {
    this.footerItems = [
      {
        "icon": "linkedin",
        "link": "https://www.linkedin.com/in/jacobollila"
      },
      {
        "icon": "instagram",
        "link": "https://www.instagram.com/jakeollila"
      },
      {
        "icon": "twitter",
        "link": "https://twitter.com/JakeOllila"
      }
    ]
  }

}
