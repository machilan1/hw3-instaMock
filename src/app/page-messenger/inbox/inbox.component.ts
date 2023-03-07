import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { ClientMessageComponent } from './client-message/client-message.component';
import { MessengerStatusService } from '../component-services/messenger-status.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { UserService } from 'src/app/data-user/users/users.service';
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
    private userService :UserService
  ) {}

  session$ = this.messengerStatusService.sessionSelected$
  messages$ = this.session$.pipe(map(session=>session.messages))
  recieverID$ =this.session$.pipe(map(session=>session.participant.filter(user=>user!==this.clientService.currentClientID)[0]))
  recieverPic$ = this.recieverID$.pipe(map(ID=>this.userService.getUserPicByUserID(ID)))
  
  onReturn(){
  this.messengerStatusService.messengerActive$.next(false)
}
}
