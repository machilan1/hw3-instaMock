import { Component ,Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from 'src/app/share/posts/post.model';
import { UserService } from 'src/app/share/users/users.service';
import { ClientService } from 'src/app/share/client/client.service';
import { ReactiveFormsModule ,FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/share/posts/comment.service';
import { Reply } from 'src/app/share/posts/comment.model';
import { CommentTransService } from 'src/app/share/transmiter/comment-trans.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  constructor(private userService:UserService,
              private clientService:ClientService,
              private commentService:CommentService,
              private commentTransService :CommentTransService
              ){}
  @Input() post!:Post 


  private updateRenderDataSub!:Subscription;
  comments!:Reply[];
  authorImg!:String;
  clientID!:String;
  clientImg!:String;
  commentForm!:FormGroup;
  postID!:String;

  
  ngOnInit(){
    this.commentForm = new FormGroup({
      'comment': new FormControl(null,Validators.required)
    })
    this.authorImg = this.userService.users.filter(user=>user.userID===this.post.authorID)[0].profilePicture
    this.clientID = this.clientService.currentClientID;
    this.clientImg = this.userService.users.filter((user)=>user.userID===this.clientID)[0].profilePicture
    this.comments = this.commentService.comments.filter(comment=>comment.postID===this.post.postID)
    this.postID = this.post.postID;
    // Subscrib to renderdata so it reloads automatically//
    this.updateRenderDataSub = this.commentTransService.dataForCommentPageRender.pipe(
      tap(x=>
        this.comments = this.commentService.comments.filter(comment=>comment.postID===this.post.postID)
        )
      
      ).subscribe()
    //////////////
  }

  onCommentSent(){

    const temp =this.commentService.generateNewComment(this.postID,this.clientID,this.commentForm.value.comment)
    this.commentService.appendNewComments(temp)
    const temp2 =this.commentService.getCommentsByPostID(this.postID)
    console.log(temp2)
    this.commentTransService.dataForCommentPageRender.next(temp2)
    this.commentForm.reset();
  }
  onCheckComments(){
    // switch on comment page
    this.commentTransService.commentPageActive.next(true);
    //render post-wise comment data
    this.commentTransService.dataForCommentPageRender.next(this.comments);
    
    //passing current post id
    this.commentTransService.postIDFetch.next(this.postID);
    console.log(this.comments)
  }


}
