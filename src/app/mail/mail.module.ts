import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendEmailComponent } from './send-email/send-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { EmailComponent } from './email/email.component';



@NgModule({
  declarations: [
    SendEmailComponent,
    EmailSentComponent,
    EmailComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[
    SendEmailComponent
  ]
})
export class MailModule { }
