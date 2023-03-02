import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../share/users/users.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  constructor(private userService:UserService){}
  ngOnInit(): void {
    console.log(this.testpic)
  }

  testpic = this.userService.users[0].profilePicture  

}
