import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './component-services/feed.service';
import {BehaviorSubject, map} from 'rxjs'

@Component({
  selector: 'app-feed-section',
  standalone: true,
  imports: [CommonModule,FeedComponent],
  templateUrl: './feed-section.component.html',
  styleUrls: ['./feed-section.component.scss']
})
export class FeedSectionComponent {
  constructor(
    private feedService :FeedService
  ){}
// state
postIsEmpty$ = new BehaviorSubject<boolean>(true)
  posts$ = this.feedService.posts$
}
