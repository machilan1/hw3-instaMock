import { Injectable, OnInit } from "@angular/core";
import { UserService } from "../users/users.service";
import { ChatSession } from "./chat-session.model";

@Injectable({providedIn:"root"})
export class MessengerService implements OnInit{
 constructor(private userService:UserService){ }


ngOnInit(): void {
    
}


appendMessage(sessionID:String, content:String,sender:String,timeStamp:string){
    const sessionIndex = this.sessions.findIndex(session=>session.sessionID==sessionID)
    this.sessions[sessionIndex].messages.push({sender:sender,content:content,timeStamp:timeStamp})
}

 sessions:ChatSession[]=[
    {
        sessionID:'1',
        participant:["leo369","official.louis"],
        messages:[
            {sender:'leo369',content:'Watch footy game?',timeStamp:'20230228'},
            {sender:'official.louis',content:'Yeah! Crazy touchdown.',timeStamp:'20230228'},
            {sender:'leo369',content:'Fave player?',timeStamp:'20230228'},
            {sender:'official.louis',content:'Jonesy. GOAT.',timeStamp:'20230228'},
            {sender:'leo369',content:'Nice. Next game?',timeStamp:'20230228'},
            {sender:'official.louis',content:'Fire. Watch together?',timeStamp:'20230228'},
            {sender:'leo369',content:'Yessir. Brews?',timeStamp:'20230228'},
        ]

    },
    {
        sessionID:'2',
        participant:['leo369','terrisa.1994'],
        messages:[
            {sender:'leo369',content:'Hey, u going to the party tonight?',timeStamp:'20230228'},
            {sender:'terrisa.1994',content:"Yeah, I'm thinking about it. U wanna go together?",timeStamp:'20230228'},
            {sender:'leo369',content:"For sure, that sounds lit. What time r u planning to go?",timeStamp:'20230228'},
            {sender:'terrisa.1994',content:"IDK, maybe around 9?",timeStamp:'20230228'},
            {sender:'leo369',content:"Sounds good to me. I'll hit u up later to figure out the deets.",timeStamp:'20230228'},
            {sender:'terrisa.1994',content:"OK, sounds like a plan. See u later.",timeStamp:'20230228'},
    
        ]

    }
 ]
}