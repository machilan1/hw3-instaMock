import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SessionComponent } from '../page-messenger/session/session.component';
import { ChatSession } from './component-models/chat-session.model';
import { MessengerService } from './component-services/messenger.service';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { ClientService } from '../data-user/client/client.service';
import { MessengerStatus } from './component-services/messenger-status.service';
@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [CommonModule, InboxComponent, SessionComponent],
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss'],
})
export class MessageSectionComponent {}
