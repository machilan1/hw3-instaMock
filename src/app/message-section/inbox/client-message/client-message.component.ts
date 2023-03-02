import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {tap} from'rxjs/operators'
import {Subscription} from'rxjs'
import { Message } from 'src/app/share/messenger/message.model';
import { MessengerService } from 'src/app/share/messenger/messenger.service';
import { ClientService } from 'src/app/share/client/client.service';
import { InboxService } from 'src/app/share/messenger/inbox.service';
@Component({
  selector: 'app-client-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-message.component.html',
  styleUrls: ['./client-message.component.scss']
})
export class ClientMessageComponent implements OnInit, OnDestroy{
constructor(private messengerService:MessengerService, private clientService:ClientService, private inboxService :InboxService){}
private recieverSub!:Subscription;

messages!:Message[]
clientID!:String;
recieverID!: String;

ngOnInit(): void {
  this.recieverSub = this.inboxService.recieverEmmitter.pipe(
    tap(ID=> this.recieverID=ID),
    tap(x=>this.getMessages())
    ).subscribe()
  this.clientID = this.clientService.currentClientID
}

getMessages(){
  this.messages = this.messengerService.sessions.filter(session=> session.participant.includes(this.clientID)&&session.participant.includes(this.recieverID))[0].messages
}


ngOnDestroy(): void {
  this.recieverSub.unsubscribe()
}
}
