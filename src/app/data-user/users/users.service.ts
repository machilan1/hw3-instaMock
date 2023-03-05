import { Injectable } from '@angular/core';
import { User } from './user.model';
@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [
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
}
