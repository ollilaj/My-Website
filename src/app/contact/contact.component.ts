import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactService } from './contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  constructor(private contactService : ContactService) { }

  ngOnInit() {}


  sendEmail(emailForm: NgForm) {
    if (emailForm.valid) {
      let emailContents = {
        name: emailForm.value.name,
        address: emailForm.value.email,
        message: emailForm.value.message,
      };
      this.contactService.sendEmail(emailContents).subscribe(
        (data : any) => {
          console.log(data);
        }
      )
    }
  }

}
