import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject ,map} from 'rxjs';
import { Post } from '../component-models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor() {}



  private mockPosts: Post[] = [
    {
      postID: '1',
      content: 'Paris, you stole my heart!  #Paris #CityOfLove',
      authorID: 'terrisa.1994',
      timeStamp: '123',
      postImg: './assets/img/postPic/1-1.jpg',
      likes: 2,
      likedByClient: false,
    },
    {
      postID: '2',
      content:
        'Introducing our brand new moisture balm! 💦💄 Say goodbye to dry, cracked lips and hello to supple, hydrated ones. 💋 Formulated with nourishing ingredients, our balm provides long-lasting moisture and a natural, glossy finish. Get yours today and #feelthemagic! ✨💫 #moisturebalm #lipcare #beautyessentials',
      authorID: 'tainan.jolin',
      timeStamp: '123',
      postImg: './assets/img/postPic/2-1.jpg',
      likes: 16,
      likedByClient: false,
    },
    {
      postID: '3',
      content:
        'Welcome to the world, little one! 🎉👶🏼 Congratulations to my amazing friend @official.louis on the arrival of their precious bundle of joy. So excited to watch your family grow and to be a part of this incredible journey. Sending lots of love and blessings your way. ❤️ #newborn #babylove #friendshipgoals #blessed #grateful',
      authorID: 'parisam',
      timeStamp: '123',
      postImg: './assets/img/postPic/3-1.jpg',
      likes: 7,
      likedByClient: true,
    },
    {
      postID: '4',
      content:
        "Spent a delightful afternoon with my little buddy! ☀️👧Just had the best afternoon with this adorable little girl! We had a blast running around in the sunshine, playing games and exploring the outdoors. Watching her curiosity and joy for life is truly infectious. I feel so lucky to have such a wonderful little friend in my life. Here's to many more adventures together! 🌳🦋💕 #goodafternoon #littlebuddy #outdoorfun #blessed",
      authorID: 'leo369',
      timeStamp: '123',
      postImg: './assets/img/postPic/4-1.jpg',
      likes: 17,
      likedByClient: true,
    },
    {
      postID: '5',
      content:
        "New Season on the way!",
      authorID: 'adventure.time.official',
      timeStamp: '123',
      postImg: './assets/img/postPic/5-1.jpg',
      likes: 10,
      likedByClient: true,
    },
    {
      postID: '6',
      content:
        "2月7日(火)放送回がPodcastに追加されました！アーカイブでいつでもお聴きいただけます🎧",
      authorID: 'kazuhisa.uekusa',
      timeStamp: '123',
      postImg: './assets/img/postPic/6-1.jpg',
      likes: -10,
      likedByClient: true,
    },
    {
      postID: '7',
      content:"要聽媽媽的話。",
      authorID: 'jay.chou',
      timeStamp: '123',
      postImg: './assets/img/postPic/7-1.jpg',
      likes: 233,
      likedByClient: true,
    },
    {
      postID: '8',
      content:
        "LOL🤣😂 My goofy little pumpkin ❤ ",
      authorID: 'terrisa.1994',
      timeStamp: '123',
      postImg: './assets/img/postPic/8-1.jpg',
      likes: 54,
      likedByClient: true,
    },
  ];


  posts$ = new BehaviorSubject<Post[]>(this.mockPosts)

  getPostsLength$ByUserID(userID:string){
    return this.posts$.pipe(map(posts=>posts.filter(post=>post.authorID===userID).length))
  }
}
