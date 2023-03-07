import { Injectable } from "@angular/core";
import { PostService } from "src/app/page-homepage/component-services/post.service";
import {map}from'rxjs'
import { UserService } from "src/app/data-user/users/users.service";
import { ClientService } from "src/app/data-user/client/client.service";

@Injectable({providedIn:"root"})
export class FeedService{
    constructor(
        private postService:PostService,
        private userService:UserService,
        private clientService:ClientService
    ){}
// esseFor testing 
    mockUser = this.clientService.currentClientID
    // esse
    user$ = this.clientService.currentClientID$
    posts$ = this.getPosts$byUserID(this.mockUser)




// click feed and display post
    getPosts$byUserID(userID:string){
        return this.postService.posts$.pipe(map(posts=>posts.filter(post=>post.authorID===userID)))
    }

    getProfilePic$ByUserID(userID:string){
        return this.userService.getUserPic$ByUserID(userID)
    }


//for static displays

    getClientPic$(){
        return this.clientService.clientPic$
    }
    

    getPostsLengthByUserID(userID:string){
        return this.postService.getPostsLengthByUserID(userID)
    }


}

