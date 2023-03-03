import { Component ,OnInit ,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session/session.component';
import { MessengerService } from '../share/messenger/messenger.service';
import { ClientService } from '../share/client/client.service';
import { ChatSession } from '../share/messenger/chat-session.model';
import { InboxComponent } from './inbox/inbox.component';
import { InboxService } from '../share/messenger/inbox.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [CommonModule,SessionComponent,InboxComponent],
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss']
})
export class MessageSectionComponent implements OnInit, OnDestroy{
  constructor(private messengerService:MessengerService,
            private clientService:ClientService,
            private inboxService:InboxService,
            private router:Router
            ){  }


  private inboxActiveSub!:Subscription;
  clientUserID = this.clientService.currentClientID;
  sessionList!:ChatSession[];
  inboxActive:boolean=false;

  ngOnInit(): void {
    this.inboxActiveSub = this.inboxService.inboxActiveEmmiter.subscribe(bool => this.inboxActive=bool);
    this.sessionList = this.messengerService.sessions.filter(session=>session.participant.includes(this.clientUserID));
  }
  

  ngOnDestroy(): void {
    this.inboxActiveSub.unsubscribe()
  }

  onClickChev(){
    this.router.navigate(['home'])
  }

}



