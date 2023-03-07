import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Post } from "../component-models/post.model";
@Injectable({providedIn:"root"})
export class HomeStatusService{
    commentPageActive$ = new BehaviorSubject<boolean>(false)
    currentPost$ = new Subject<Post>
}