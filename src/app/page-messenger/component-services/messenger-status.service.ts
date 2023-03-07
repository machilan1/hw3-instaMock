import { Injectable } from "@angular/core";
import{BehaviorSubject,Subject} from'rxjs'
import { ChatSession } from "../component-models/chat-session.model";
@Injectable({providedIn:"root"})
export class MessengerStatusService{
    messengerActive$ = new BehaviorSubject<boolean>(false)
    sessionSelected$ = new Subject<ChatSession>

}