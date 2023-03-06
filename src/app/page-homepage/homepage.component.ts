import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { PostComponent } from './post/post.component';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { PostService } from './component-services/post.service';
import { Post } from './component-models/post.model';
import { ClientService } from '../data-user/client/client.service';
import { UserService } from '../data-user/users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CommentPageComponent, PostComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent   {
  constructor(

  ) {}



}
