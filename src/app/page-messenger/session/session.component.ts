import { Component,  OnInit, OnDestroy,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerStatusService } from '../component-services/messenger-status.service';
import { Reply } from 'src/app/page-homepage/component-models/comment.model';
import { ChatSession } from '../component-models/chat-session.model';
import { MessengerService } from '../component-services/messenger.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { switchMap,map,tap } from 'rxjs';
import { UserService } from 'src/app/data-user/users/users.service';
@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent  implements OnInit{
  constructor(
    private messengerStatusService :MessengerStatusService,
    private messengerService :MessengerService,
    private clientService :ClientService,
    private userService :UserService
  ){}
@Input()session!:ChatSession

    recieverID$ = this.messengerService.sessions$.pipe(map(sessions=>sessions.filter(session=>session.sessionID ===this.session.sessionID)[0].participant.filter(user=>user!==this.clientService.currentClientID)[0]),tap(x=>console.log(x)))
    recieverPic$ = this.recieverID$.pipe(map(ID=>this.userService.getUserPicByUserID(ID)))
    lastMessage$ = this.messengerService.sessions$.pipe(map(sessions=>sessions.filter(session=>session.sessionID===this.session.sessionID)[0].messages[this.session.messages.length-1].content))

ngOnInit(): void {
  console.log(this.recieverID$)
}
onClick(){
  this.messengerStatusService.messengerActive$.next(true)
  this.messengerStatusService.sessionSelected$.next(this.session)
}
}


