import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session/session.component';
import { MessengerService } from '../share/messenger/messenger.service';
import { ClientService } from '../share/client/client.service';
import { ChatSession } from '../share/messenger/chat-session.model';
import { InboxComponent } from './inbox/inbox.component';
@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [CommonModule,SessionComponent,InboxComponent],
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss']
})
export class MessageSectionComponent implements OnInit{
  constructor(private messengerService:MessengerService,private clientService:ClientService){  }
  clientUserID = this.clientService.currentClientID;
  sessionList!:ChatSession[];

  ngOnInit(): void {
    this.sessionList = this.messengerService.sessions;
  }
  


}
