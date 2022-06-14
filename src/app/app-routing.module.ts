import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './mail/email/email.component';
import { SendEmailComponent } from './mail/send-email/send-email.component';
import { EmailSentComponent } from './mail/email-sent/email-sent.component';

const routes: Routes = 
[
  {
    path:'', redirectTo:'email', pathMatch:'full'
  },
  {
    path: 'email', component: EmailComponent
  },
  {
    path: 'sendemail', component: SendEmailComponent
  },
  {
    path: 'emailsent', component: EmailSentComponent
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
