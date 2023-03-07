import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { HomeStatusService } from '../component-services/home-status.services';
import { CommentService } from '../component-services/comment.service';
import {map ,takeUntil,Subject, Observable, tap, merge, switchMap} from'rxjs'
import { Post } from '../component-models/post.model';
import { TmplAstElement } from '@angular/compiler';
import { PostService } from '../component-services/post.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { UserService } from 'src/app/data-user/users/users.service';

@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CommentComponent],
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss'],
})
export class CommentPageComponent implements OnInit,OnDestroy{
  constructor(
    private homeStatusService:HomeStatusService,
    private commentService: CommentService,
    private postService:PostService,
    private clientService:ClientService,
    private userService:UserService
  ) {}

 commentForm = new FormGroup({
   'comment' :new FormControl(null,Validators.required)
 })
post!:Post;
 post$ = this.homeStatusService.currentPost$.pipe(tap(x=>this.post=x))

 comments$ = this.post$.pipe(switchMap(post=>this.commentService.comments$.pipe(map(comments=>comments.filter(comment=>comment.postID===post.postID)))))
 clientID$ = this.clientService.currentClientID$ 
 clientPic$ = this.clientID$.pipe(switchMap(ID=>this.userService.users$.pipe(map(users=>users.filter(user=>user.userID===ID)[0].profilePicture))))
 authorPic$ = this.post$.pipe(switchMap(post=>this.userService.users$.pipe(map(users=>users.filter(user=>user.userID===post.authorID)[0].profilePicture))))
 ngOnInit(){
  }
  onReturn(){
    this.homeStatusService.commentPageActive$.next(false)
  }
  ngOnDestroy(): void {
  }
  onSubmitComment(){
    if(this.commentForm.status=="VALID"){
      this.commentService.appendNewComment(this.post.postID,this.commentForm.value.comment!,this.clientService.currentClientID)
      this.commentForm.reset()
  }
}}
