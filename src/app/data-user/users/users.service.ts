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
      nameDisplay: 'TerrisaCutie',
      story: 'Cats <3  Dogs :(',
      profilePicture: './assets/img/profilePic/g1.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },

    {
      userID: 'parisam',
      nameDisplay: 'Maona Lyndsey',
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
    {
      userID: 'jay.chou',
      nameDisplay: '周杰倫',
      story: '唉呦，這個屌。',
      profilePicture: '/assets/img/profilePic/b3.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },
    {
      userID: 'adventure.time.official',
      nameDisplay: 'Finn & Jake',
      story: "Adventure Time. Come on grab your friends.We'll go to very distant lands.With Jake the Dog and Finn the Human.The fun will never end, it's Adventure Time",
      profilePicture: '/assets/img/profilePic/c1.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    },
    {
      userID: 'kazuhisa.uekusa',
      nameDisplay: 'Kazuhisa Uekusa (ウエスP)',
      story: "ウエスP（Wes-P、うえすぴー、1987年〈昭和62年〉11月15日[1] - ）とは、吉本興業に所属する日本のお笑い芸人（ピン芸人）である。",
      profilePicture: '/assets/img/profilePic/b4.jpg',
      isOnline: false,
      lastSeen: '202302211600',
    }
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
