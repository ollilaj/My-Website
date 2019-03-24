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
  public emailFormErrorMessages : any;
  public hasSubmitted : boolean;

  constructor(private contactService : ContactService) {
    this.emailForm = this.createFormGroup();
    this.createFormErrorMessages();
    this.hasSubmitted = false;
  }

  ngOnInit() {

  }

  createFormGroup() : FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      message: new FormControl('', [Validators.required])
    });
  }

  createFormErrorMessages() : void {
    this.emailFormErrorMessages = {
      'name': [
        { type: 'required', message: '* Name is required' }
      ],
      'email': [
        { type: 'required', message: '* Email address is required' },
        { type: 'pattern', message: '* Enter a valid email address' }
      ],
      'message': [
        { type: 'required', message: '* Message is required' }
      ]
    }
  }

  validateAllFormFields() : void {
    Object.keys(this.emailForm.controls).forEach(field => {  //{2}
      const control = this.emailForm.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  sendEmail() {
    if (this.emailForm.valid) {
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
    } else {
      this.validateAllFormFields();
    }
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
