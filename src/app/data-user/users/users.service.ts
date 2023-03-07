import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  private mockUsers: User[] = [
    {
      userID: 'leo369',
      nameDisplay: 'Leo Strat',
      story: 'There best way is to see for yourself.',
      profilePicture: './assets/img/profilePic/b1.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },

    {
      userID: 'official.louis',
      nameDisplay: 'GameFreakLouis',
      story: 'Tokyo -> New York -> Taipei',
      profilePicture: './assets/img/profilePic/b2.jpg',
      isOnline: false,
      lastSeen: '202302211300',
    },

    {
      userID: 'terrisa.1994',
      nameDisplay: 'Terrisa<3',
      story: 'Cats <3  Dogs :(',
      profilePicture: './assets/img/profilePic/g1.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },

    {
      userID: 'parisam',
      nameDisplay: '小飛',
      story: 'Ask before you follow.',
      profilePicture: './assets/img/profilePic/g2.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },

    {
      userID: 'tainan.jolin',
      nameDisplay: '東區蔡依林',
      story: 'Sleep once. Awake twice.',
      profilePicture: '/assets/img/profilePic/g3.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },
  ];


  users: User[] = this.mockUsers;
  users$ = new BehaviorSubject<User[]>(this.mockUsers);


  getUserPicByUserID(userID: string) {
    if (userID) {
      return this.users.filter((user) => user.userID === userID)[0]
        .profilePicture;
    } else {
      return '';
    }
  }

  getUserPic$ByUserID(userID: string) {
    return this.users$.pipe(
      map(
        (users) =>
          users.filter((user) => user.userID === userID)[0].profilePicture
      )
    );
  }
  getUserDesplayByUserID(userID: string) {
    return this.users.filter((user) => user.userID === userID)[0].nameDisplay;
  }

  getUserObjectByUserID(userID: string) {
    return this.users.filter((user) => user.userID === userID)[0];
  }
}
