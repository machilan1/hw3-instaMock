import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { BehaviorSubject,Subject, map ,Subscription} from 'rxjs';
import { ActivatedRoute,RouterLink} from '@angular/router';

@Component({
  selector: 'app-feed-section',
  standalone: true,
  imports: [CommonModule, FeedComponent,RouterLink],
  templateUrl: './feed-section.component.html',
  styleUrls: ['./feed-section.component.scss'],
})
export class FeedSectionComponent implements OnInit{
  constructor(
    private route:ActivatedRoute
    ) {}
  // state
  testSub = new Subscription
  userID$ = this.route.params.pipe(map(object=>object['userID']))
  
ngOnInit(): void {
  
}
}
