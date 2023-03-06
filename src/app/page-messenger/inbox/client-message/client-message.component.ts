import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSession } from '../../component-models/chat-session.model';
import { Message } from '../../component-models/message.model';
import { ClientService } from 'src/app/data-user/client/client.service';
@Component({
  selector: 'app-client-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-message.component.html',
  styleUrls: ['./client-message.component.scss'],
})
export class ClientMessageComponent implements OnInit, OnDestroy {
  constructor(
    private clientService:ClientService
  ){

  }
// esse
  clientID!:string;
  @Input() message!:Message
  

  ngOnInit(): void {
    this.clientID = this.clientService.currentClientID
  }
  ngOnDestroy(): void {}
}
