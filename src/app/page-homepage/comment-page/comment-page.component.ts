import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { HomeStatusService } from '../component-services/home-status.services';
import { CommentService } from '../component-services/comment.service';
import { map, tap,of, switchMap, BehaviorSubject, catchError } from 'rxjs';
import { PostService } from '../component-services/post.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { UserService } from 'src/app/data-user/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommentComponent],
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss'],
})
export class CommentPageComponent implements OnInit, OnDestroy {
  constructor(
    private homeStatusService: HomeStatusService,
    private commentService: CommentService,
    private postService: PostService,
    private clientService: ClientService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
    commentorID!:string
    postID!:string
    content!:string
  commentForm = new FormGroup({
    comment: new FormControl(null, Validators.required),
  });

  // states
  commentList$ = this.route.params.pipe(
    map((object) => object['postID']),
    switchMap((postID) => this.commentService.getPostComments$ByPostID(postID))
  );

  postContent$ = this.route.params.pipe(
    map((object) => object['postID']),
    tap(postID=>this.postID=postID),
    switchMap((postID) =>
      this.postService.posts$.pipe(
        map(
          (posts) => posts.filter((post) => post.postID === postID)[0].content
        ),
        tap(content=>this.content=content)
      )
    )
    ,catchError(err=>of('Content is loading now......'))
    );

  authorPic$ = this.route.params.pipe(
    map((object) => object['postID']),
    switchMap((postID) =>
      this.postService.posts$.pipe(
        map(
          (posts) => posts.filter((post) => post.postID === postID)[0].authorID
        ),
        switchMap((authorID) => this.userService.getUserPic$ByUserID(authorID))
      )
    )
  ,catchError(err=>this.clientService.notloadedPic$)
    );

  clientID$ = this.clientService.currentClientID$.pipe(tap(clientID=>this.commentorID=clientID));
  clientPic$ = this.clientService.clientPic$;


  ngOnInit() {}

  onReturn() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {}

  onSubmitComment() {
    if(this.commentForm.status=="VALID"){
      this.commentService.appendNewComment(this.postID,this.commentForm.value.comment!,this.commentorID)
      console.log(this.postID)
      this.commentForm.reset()
    }
  }
}
