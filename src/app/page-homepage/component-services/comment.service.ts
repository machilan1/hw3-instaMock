import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, takeUntil } from 'rxjs';
import { Reply } from '../component-models/comment.model';
import { PostService } from './post.service';
import { map } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CommentService {
  constructor(private postService: PostService) {}

   mockdata: Reply[] = [
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

  comments$ = new BehaviorSubject<Reply[]>(this.mockdata);



   getPostComments$ByPostID(postID: string) {
    return this.comments$.pipe(map(comments=>comments.filter(comment=>comment.postID===postID)))

  }
  private generateValidCommentID(postID: string) {
    return `${postID}-${this.mockdata.filter(comment=>comment.postID===postID).length}`
  }

  private generateCommentObject(postID:string,content:string,commenterID:string):Reply{

    return{
      commentID: this.generateValidCommentID(postID),
      postID: postID,
      commenterID:commenterID,
      content:content,
      likes:0,
      likedByClient:false
    }

  }

  appendNewComment(postID:string,content:string,commenterID:string){
    const comment:Reply = this.generateCommentObject(postID,content,commenterID)
    this.mockdata.push(comment)
    this.comments$.next(this.mockdata)
  }


}
