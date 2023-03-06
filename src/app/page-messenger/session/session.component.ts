import { Component,  OnInit, OnDestroy,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSession } from '../component-models/chat-session.model';
import { UserService } from 'src/app/data-user/users/users.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { MessengerStatus } from '../component-services/messenger-status.service';
@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent  {

}


