import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SessionComponent } from './session/session.component';

@Component({
  selector: 'app-message-section',
  standalone: true,
  imports: [CommonModule,InboxComponent,SessionComponent],
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.scss'],
})
export class MessageSectionComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
