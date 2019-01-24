import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  public emailForm : FormGroup;

  constructor(private contactService : ContactService) {
    this.emailForm = this.createFormGroup();
  }

  ngOnInit() {

  }

  createFormGroup() : FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  sendEmail() {
    let emailContents = {
      name: this.emailForm.controls['name'].value,
      email: this.emailForm.controls['email'].value,
      message: this.emailForm.controls['message'].value,
    };
    this.contactService.sendEmail(emailContents).subscribe(
      (data : any) => {
        console.log(data);
      }
    );
    this.emailForm.reset();
  }

  get name() {
    return this.emailForm.get('name');
  }

  get email() {
    return this.emailForm.get('email');
  }

  get message() {
    return this.emailForm.get('message');
  }

}
