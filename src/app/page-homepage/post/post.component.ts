import { Component, Input, OnInit ,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../component-models/post.model';
import { UserService } from 'src/app/data-user/users/users.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { CommentService } from '../component-services/comment.service';
import { map, Observable} from 'rxjs';
import { HomeStatusService } from '../component-services/home-status.services';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit{
  constructor(
    private commentService:CommentService,
    private userService:UserService,
    private clientService:ClientService,
    private homeStatusService:HomeStatusService
  ) {}
// esse    
@Input() post!:Post;
authorPic!:string;
  clientPic$:Observable<string>= this.clientService.currentClientID$.pipe(map(id=> this.userService.getUserPicByUserID(id)));

  commentslength$ = this.commentService.comments$.pipe(map(comments=>comments.filter(comment=>comment.postID===this.post.postID).length))
  commentForm  = new FormGroup(
    {'comment':new FormControl(null,Validators.required)}
  )
ngOnInit(): void {
  this.authorPic = this.userService.getUserPicByUserID(this.post.authorID)
}
// 

onCheckComment(){
  this.homeStatusService.commentPageActive$.next(true)
  this.homeStatusService.currentPost$.next(this.post)
}

onSubmitComment(){
  if(this.commentForm.status=="VALID"){
    this.commentService.appendNewComment(this.post.postID,this.commentForm.value.comment!,this.clientService.currentClientID)
    this.commentForm.reset()
    
  }
}
}
