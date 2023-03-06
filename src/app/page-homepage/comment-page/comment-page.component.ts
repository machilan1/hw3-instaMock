import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/data-user/users/users.service';
import { PostService } from '../component-services/post.service';
import { CommentService } from '../component-services/comment.service';
import { Reply } from '../component-models/comment.model';
import { generate, Subject, Subscription, takeUntil ,tap} from 'rxjs';
import { StatusService } from 'src/app/service-global/status.service';
import { Post } from '../component-models/post.model';
import { CommentComponent } from './comment/comment.component';
import { ClientService } from 'src/app/data-user/client/client.service';
@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CommentComponent],
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss'],
})
export class CommentPageComponent {
  constructor(

  ) {}


}
