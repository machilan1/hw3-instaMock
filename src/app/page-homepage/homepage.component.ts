import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { PostComponent } from './post/post.component';
import { PostService } from './component-services/post.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Post } from './component-models/post.model';
import { User } from '../data-user/users/user.model';
import { ClientService } from '../data-user/client/client.service';
import { HomeStatusService } from './component-services/home-status.services';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CommentPageComponent, PostComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  constructor(
    private postService: PostService,
    private clientService: ClientService,
    private homeStatusService:HomeStatusService
    ) {}

  // esse
  active!:boolean;
  posts$!: Observable<Post[]>;
  clientID$!: Observable<string>;
  commentPageActive$!:Observable<boolean>
  //subs
  activeSub!:Subscription;
  //
    destroy$ = new Subject<boolean>;

  ngOnInit(): void {
    this.posts$ = this.postService.posts$
    this.clientID$ = this.clientService.currentClientID$

    this.activeSub = this.homeStatusService.commentPageActive$
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(x=>this.active=x)
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }

  onCheckMessage(){
    
  }
}
