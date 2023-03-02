import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({providedIn:"root"})

export class InboxService{
    recieverEmmitter =new Subject<any>();
    
    messageUpdateEmmiter= new Subject<boolean>;
    inboxActiveEmmiter= new Subject<boolean>;
}