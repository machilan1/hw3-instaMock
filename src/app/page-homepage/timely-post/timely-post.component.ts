import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/data-user/users/users.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-timely-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timely-post.component.html',
  styleUrls: ['./timely-post.component.scss'],
})
export class TimelyPostComponent {
  constructor(private userService: UserService) {}

  userList$ = this.userService.users$
  thumbnails$ = this.userService.users$.pipe(
    tap(),
    map((users) => users.map((user) => user.profilePicture))
  );
}
