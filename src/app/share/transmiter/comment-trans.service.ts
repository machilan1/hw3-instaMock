import { Injectable } from "@angular/core";
import{Subject} from "rxjs";
import { Reply } from "../posts/comment.model";
@Injectable({providedIn:'root'})
export class CommentTransService{

    commentPageActive = new Subject<boolean>
    commentDataFetch = new Subject<Reply[]>
    postIDFetch = new Subject<String>
}