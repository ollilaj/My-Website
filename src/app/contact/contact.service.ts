import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private http : HttpClient){}

  sendEmail(emailContents) : Observable<any> {
    return this.http.post('/api/send-email/', emailContents)
  }

}
