import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SessionComponent } from '../page-messenger/session/session.component';
import { CommentService } from '../page-homepage/component-services/comment.service';
import { PostService } from '../page-homepage/component-services/post.service';
import { MessengerService } from './component-services/messenger.service';
import { MessengerStatusService } from './component-services/messenger-status.service';
import { Subject, takeUntil ,map} from 'rxjs';
import { ClientService } from '../data-user/client/client.service';

@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [CommonModule, InboxComponent, SessionComponent],
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss'],
})
export class MessageSectionComponent implements OnInit,OnDestroy{
  constructor(
    private messageService: MessengerService,
    private messengerStatusService: MessengerStatusService,
    private clietService :ClientService
  ){}

  sessions$ = this.messageService.sessions$.pipe(map(sessions=>sessions.filter(session=>session.participant.includes(this.clietService.currentClientID))))
  active$ = this.messengerStatusService.messengerActive$
  active:boolean=false;

  // subs
  destroy$ = new Subject<boolean>
  ngOnInit(){
    this.active$.pipe(takeUntil(this.destroy$)).subscribe(x=>this.active =x)
  }
  ngOnDestroy(): void {
    this.destroy$.next(true)
  }

}
