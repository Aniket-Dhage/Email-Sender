import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailSender } from '../model/email-sender';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpclient: HttpClient) { }

  url: string= "http://localhost:7878/"

  sendData(e: EmailSender)
  {
    return this.httpclient.post(this.url+"sendemail",e);
  }
}
