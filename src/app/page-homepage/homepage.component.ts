import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { PostComponent } from './post/post.component';
import { PostService } from './component-services/post.service';
import { Observable, Subject, Subscription, takeUntil, map } from 'rxjs';
import { ClientService } from '../data-user/client/client.service';
import { HomeStatusService } from './component-services/home-status.services';
import { ActivatedRoute, Router ,RouterLink } from '@angular/router';
import { TimelyPostComponent } from './timely-post/timely-post.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CommentPageComponent, PostComponent,RouterLink,TimelyPostComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  constructor(
    private postService: PostService,
    private clientService: ClientService,
    private homeStatusService: HomeStatusService,
    private routes: Router,
    private route:ActivatedRoute
  ) {}

  // esse
  clientPic$ = this.clientService.clientPic$;
  active!: boolean;
  clientID$ = this.clientService.currentClientID$;
  commentPageActive$!: Observable<boolean>;
  posts$ = this.postService.posts$;
  //subs

  active$ = this.route.params.pipe(map(obj => obj['commentsActive']==='comments'))


  /////
  activeSub!: Subscription;
  //
  destroy$ = new Subject<boolean>();

  ngOnInit(): void {
    this.activeSub = this.homeStatusService.commentPageActive$
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => (this.active = x));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  onCheckMessage() {
    this.routes.navigate(['message']);
  }

}
