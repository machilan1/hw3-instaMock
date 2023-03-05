import { Injectable, OnInit } from '@angular/core';
import { Reply } from '../component-models/comment.model';
@Injectable({ providedIn: 'root' })
export class CommentService implements OnInit {
  ngOnInit() {}

  comments: Reply[] = [
    {
      commentID: '1-1',
      postID: '1',
      commenterID: 'parisam',
      content: 'Adding Paris to my bucket list!',
      likes: 0,
      likedByClient: true,
    },
    {
      commentID: '1-2',
      postID: '1',
      commenterID: 'leo369',
      content:
        'Paris truly is the city of love! Glad you had an amazing trip ❤️🗼 #Jealous',
      likes: 3,
      likedByClient: true,
    },
    {
      commentID: '1-3',
      postID: '1',
      commenterID: 'tainan.jolin',
      content: '好想出國TT',
      likes: 0,
      likedByClient: true,
    },
    {
      commentID: '3-1',
      postID: '3',
      commenterID: 'tainan.jolin',
      content: 'So happy for you! 😍',
      likes: 2,
      likedByClient: true,
    },
    {
      commentID: '4-1',
      postID: '4',
      commenterID: 'terrisa.1994',
      content:
        "I love seeing the joy on kids' faces when they're exploring the world. So glad you got to share that with her! 🌎👧❤️",
      likes: 1,
      likedByClient: true,
    },
  ];
}
