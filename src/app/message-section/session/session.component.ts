import { Component, Input, OnInit ,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subscription} from'rxjs'
import {tap} from 'rxjs/operators'
import { ChatSession } from 'src/app/share/messenger/chat-session.model';
import{ Message } from 'src/app/share/messenger/message.model'
import { ClientService } from 'src/app/share/client/client.service';
import { UserService } from 'src/app/share/users/users.service';
import { InboxService } from 'src/app/share/messenger/inbox.service';
@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnDestroy{
  constructor(private clientServiece:ClientService,
             private userService:UserService,
             private inboxService:InboxService
             ){}
  @Input() sess!:ChatSession 

  private messageUpdateSub!:Subscription;

  updated:boolean=false;
  lastMessage!:Message;
  recieverID!:String;
  recieverPicture!:String;
  recieverDisplayName!:String;

  ngOnInit(): void {
    this.lastMessage = this.sess.messages[this.sess.messages.length-1]
    this.recieverID = this.sess.participant.filter(userID=>userID!==this.clientServiece.currentClientID)[0]
    this.recieverPicture = this.userService.users.filter(user=>user.userID===this.recieverID)[0].profilePicture
    this.recieverDisplayName = this.userService.users.filter(user=>user.userID===this.recieverID)[0].nameDisplay


  this.messageUpdateSub = this.inboxService.messageUpdateEmmiter.pipe(
    tap(bool => this.updated =bool),
    tap(bool => this.updated? this.updateMessage() : this.updated=false)
    ).subscribe();
  
  }

  onClick(){
    console.log('clicked')
    this.inboxService.recieverEmmitter.next(this.recieverID)
  }



  updateMessage(){
    this.lastMessage = this.sess.messages[this.sess.messages.length-1]
  }


  ngOnDestroy(): void {
    this.messageUpdateSub.unsubscribe()
  }

}
