import { Component ,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reply } from '../../component-models/comment.model';
import { UserService } from 'src/app/data-user/users/users.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent  {
  constructor(
    private userService :UserService
  ){}
@Input() comment!:Reply


commenterPic$ = this.userService.users$.pipe(map(users=>users.filter(user=>user.userID===this.comment.commenterID)[0].profilePicture))

}
