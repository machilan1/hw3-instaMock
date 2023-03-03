import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../share/users/users.service';
import { PostService } from '../share/posts/post.service';
import { Post } from '../share/posts/post.model';
import { PostComponent } from './post/post.component';
import { Router } from '@angular/router';
import { ClientService } from '../share/client/client.service';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { CommentTransService } from '../share/transmiter/comment-trans.service';
import {Subscription} from'rxjs'
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,PostComponent,CommentPageComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy{
  constructor(private userService:UserService,
              private postService:PostService ,
              private router:Router,
              private clientService:ClientService,
              private commentTransService:CommentTransService 
            ){}

  posts!:Post[];
  clientPic!:String;
  clientID!:String;
  commentPageActive:boolean=false;
  commentPageActiveSub!:Subscription;


  ngOnInit(): void {
    this.posts = this.postService.posts
    this.clientID =this.clientService.currentClientID
    this.clientPic= this.userService.users.filter(user=>user.userID===this.clientID)[0].profilePicture
    this.commentPageActiveSub = this.commentTransService.commentPageActive.subscribe(bool=>this.commentPageActive=bool)
  }
  
  ngOnDestroy(): void {
    this.commentPageActiveSub.unsubscribe()
  }


 
  onClick(){
    this.router.navigate(['messages'])
  }
}
