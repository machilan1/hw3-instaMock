import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { ClientMessageComponent } from './client-message/client-message.component';
import { MessengerStatusService } from '../component-services/messenger-status.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { UserService } from 'src/app/data-user/users/users.service';
import { MessengerService } from '../component-services/messenger.service';
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, ClientMessageComponent, ReactiveFormsModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent   {
  constructor(
    private messengerStatusService :MessengerStatusService,
    private clientService :ClientService,
    private userService :UserService,
    private messengerService :MessengerService
  ) {}
  recieverID!:string
  session$ = this.messengerStatusService.sessionSelected$
  messages$ = this.session$.pipe(map(session=>session.messages))
  recieverID$ =this.session$.pipe(map(session=>session.participant.filter(user=>user!==this.clientService.currentClientID)[0]),tap(x=>this.recieverID=x))
  recieverPic$ = this.recieverID$.pipe(map(ID=>this.userService.getUserPicByUserID(ID)))
  inboxForm = new FormGroup({
    'message': new FormControl(null,Validators.required)
})

  onReturn(){
  this.messengerStatusService.messengerActive$.next(false)
}

  onSubmitMessage(){
    if(this.inboxForm.status==='VALID'){
      this.messengerService.appendNewMessage(this.clientService.currentClientID,this.recieverID,this.inboxForm.value.message!)
      
      console.log(this.clientService.currentClientID)
      console.log(this.recieverID)
      this.inboxForm.reset()
    }
  }
}
