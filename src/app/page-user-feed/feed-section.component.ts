import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { BehaviorSubject,Subject, map ,tap, switchMap} from 'rxjs';
import { ActivatedRoute,RouterLink} from '@angular/router';
import { Post } from '../page-homepage/component-models/post.model';
import { UserService } from '../data-user/users/users.service';
import { PostService } from '../page-homepage/component-services/post.service';
import { ClientService } from '../data-user/client/client.service';
@Component({
  selector: 'app-feed-section',
  standalone: true,
  imports: [CommonModule, FeedComponent,RouterLink],
  templateUrl: './feed-section.component.html',
  styleUrls: ['./feed-section.component.scss'],
})
export class FeedSectionComponent  {
constructor(
  private route:ActivatedRoute,
  private userService:UserService,
  private postService:PostService,
  private clientService:ClientService
){}


userID!:string;

userPic$=
  this.route.params.pipe(
  map(object=>object['userID']),
  tap(userID=>userID = this.userID),
  map(userID=>this.userService.getUserPicByUserID(userID)),
  tap(console.log)
  )

  userDisplayName$ =
  this.route.params.pipe(
    map(object=>object['userID']),
    switchMap(userID=> this.userService.users$.pipe(map(users=>users.filter(user=>user.userID===userID)[0].nameDisplay)))
    )



    userPosts$ =
    this.route.params.pipe(
    map(object=>object['userID']),
    switchMap(userID=>this.postService.posts$.pipe(map(posts=>posts.filter(post=>post.authorID===userID))))
    )
  

  
    userPostCount$ = this.userPosts$.pipe(map(posts=>posts.length))

  userStory$=
    this.route.params.pipe(
    map(object=>object['userID']),
    map(userID=>this.userService.getUserObjectByUserID(userID)['story'])
    )

  clientPic$ = this.clientService.clientPic$

// //////Pending developing

  // numOfUserFans$=
  //   this.route.params.pipe(
  //     map(object=>object['userID']),
  //     switchMap(userID=>)
      


  // numOfUserFollowing$!:number






}
