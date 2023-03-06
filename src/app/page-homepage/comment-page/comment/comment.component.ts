import { Component ,Input,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reply } from '../../component-models/comment.model';
import { UserService } from 'src/app/data-user/users/users.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent  {


}
