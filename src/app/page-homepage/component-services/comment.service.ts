import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, takeUntil } from 'rxjs';
import { Reply } from '../component-models/comment.model';
@Injectable({ providedIn: 'root' })
export class CommentService implements OnInit {
  constructor() {}

  private commentsSub = new Subscription();
  private destroySub = new Subscription();
  private mockdata: Reply[] = [
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
  private currentCommentsData: Reply[] = this.mockdata;

  // data outlet
  comments$ = new BehaviorSubject<Reply[]>(this.mockdata);

  ngOnInit() {
    this.currentCommentsData = this.mockdata;
  }



  //set outleting data
  emitCommentsData(comments: Reply[]) {
    this.comments$.next(comments);
    this.currentCommentsData = comments;
  }

  getCommentsByPostID(postID:string){
    return this.currentCommentsData.filter(comment =>comment.postID===postID)
  }


  generateNewCommentObject(postID:string,commenterID:string,content:string|undefined|null){
    const temp:Reply = {
      commentID: this.generateValidCommentID(postID),
      postID:postID,
      commenterID:commenterID,
      content:content,
      likes:0,
      likedByClient:false
    }
    return temp;
  }

  appendNewComment(comment: Reply) {
    this.currentCommentsData.push(comment)
    this.comments$.next(this.currentCommentsData)
  }
  


  generateValidCommentID(postID: string) {
    let temp =
      this.currentCommentsData.filter((comment) => comment.postID === postID)
        .length + 1;
    return `${postID}-${temp}`;
  }

}
