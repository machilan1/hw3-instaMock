import { Component, Input, OnInit ,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Post } from '../component-models/post.model';
import { UserService } from 'src/app/data-user/users/users.service';
import { ClientService } from 'src/app/data-user/client/client.service';
import { Reply } from '../component-models/comment.model';
import { CommentService } from '../component-services/comment.service';
import { Subscription ,takeUntil,tap, BehaviorSubject ,Subject} from 'rxjs';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  constructor(

  ) {}


}
