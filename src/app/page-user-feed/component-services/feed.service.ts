import { Injectable } from "@angular/core";
import { PostService } from "src/app/page-homepage/component-services/post.service";
import {map}from'rxjs'

@Injectable({providedIn:"root"})
export class FeedService{
    constructor(
        private postService:PostService,
    ){}
// esse
    posts$ = this.postService.posts$
// esse

    getPosts$byUserID(userID:string){
        return this.posts$.pipe(map(posts=>posts.filter(post=>post.authorID===userID)))
    }





    getProfilePicByUserID(){}
    getClientPic(){}
    


}

