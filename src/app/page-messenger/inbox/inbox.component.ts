import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientMessageComponent } from './client-message/client-message.component';
import { MessengerStatus } from '../component-services/messenger-status.service';
import { ChatSession } from '../component-models/chat-session.model';
import { BehaviorSubject, Subject, Subscription, takeUntil ,tap} from 'rxjs';
import { UserService } from 'src/app/data-user/users/users.service';
import { ClientService } from 'src/app/data-user/client/client.service';
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, ClientMessageComponent, ReactiveFormsModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent   {
  constructor(

  ) {}

}
