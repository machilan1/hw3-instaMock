import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentTransService } from 'src/app/share/transmiter/comment-trans.service';
import { CommentService } from 'src/app/share/posts/comment.service';
import { Reply } from 'src/app/share/posts/comment.model';
import { Subscription} from'rxjs'
import { tap } from'rxjs/operators'
import { PostService } from 'src/app/share/posts/post.service';
import { Post } from 'src/app/share/posts/post.model';
import { UserService } from 'src/app/share/users/users.service';
import { ClientService } from 'src/app/share/client/client.service';
import { FormGroup ,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit, OnDestroy{
  constructor(
    private commentTransService :CommentTransService,
    private postService:PostService,
    private userService:UserService,
    private clientService:ClientService,
    private commentService :CommentService
  ){}

  private commentsSub!:Subscription
  private postIDSub!:Subscription
  private pageActiveSub!:Subscription

  pageActive:Boolean=false;
  comments:Reply[]=[];
  postID:String='';
  post:Post=this.postService.posts[0]
  authorPic!:String;
  clientID!:String;
  clientPic!:String;
  commentForm!:FormGroup;
ngOnInit(): void {
 this.commentsSub= this.commentTransService.dataForCommentPageRender.pipe(
   tap(comments=>this.comments=comments),
    ).subscribe()

  this.postIDSub = this.commentTransService.postIDFetch.pipe(
    tap(ID=>this.postID=ID),
    tap(ID=>this.post = this.postService.posts.filter((post)=>post.postID===ID)[0]),
    tap(ID=>this.authorPic = this.userService.users.filter(user=>user.userID===this.post.authorID)[0].profilePicture),
    tap(ID=> console.log(this.comments))

    ).subscribe()

  this.pageActiveSub = this.commentTransService.commentPageActive.subscribe(bool =>this.pageActive =bool)
  this.clientID=this.clientService.currentClientID;
  this.clientPic=this.userService.getProfilePicByID(this.clientID);

  this.commentForm = new FormGroup({
    'comment': new FormControl(null,Validators.required)
  })
}

getPicByComment(comment:Reply){
  return this.userService.getProfilePicByID(comment.commenterID)
}

onReturn(){
  this.commentTransService.commentPageActive.next(false)
}


onSubmitComment(){

  //Append new comment into database
  if(this.commentForm.status==='VALID'){
    const temp:Object = {
      content:this.commentForm.value.comment,
      senderID:this.clientID,
      postID:this.postID
    } 
    
      this.commentService.appendNewComments(
        this.commentService.generateNewComment(this.postID,this.clientID,this.commentForm.value.comment)
      )
  
    this.commentForm.reset()
        this.commentTransService.newCommentAppended.next(true)


    // Render Changes
    this.commentTransService.dataForCommentPageRender.next(
      this.commentService.comments.filter(comment=>comment.postID===this.postID)
    )



  }
}

ngOnDestroy(): void {
  this.commentsSub.unsubscribe();
  this.postIDSub.unsubscribe();
  this.pageActiveSub.unsubscribe();
}
}
