import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private common:ServiceService,private router: Router) { }

  emailform: FormGroup;

  ngOnInit(): void {

    this.emailform= this.formbuilder.group({
      toEmail:[],
      fromEmail:[],
      subject:[],
      textBody:[]
    })

  }

  submit()
  {
    console.log(this.emailform.get('toEmail').value);
    this.common.sendData(this.emailform.value).subscribe();
    this.router.navigate(['emailsent'])
  }



}
