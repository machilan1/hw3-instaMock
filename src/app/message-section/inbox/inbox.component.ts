import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { InboxService } from 'src/app/share/messenger/inbox.service';
import { UserService } from 'src/app/share/users/users.service';
import { Subscription} from 'rxjs';
import { ClientService } from 'src/app/share/client/client.service';
import { tap} from'rxjs/operators'
import { ClientMessageComponent } from './client-message/client-message.component';
import { MessengerService } from 'src/app/share/messenger/messenger.service';
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule,ClientMessageComponent,ReactiveFormsModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})


export class InboxComponent implements OnInit, OnDestroy{

  constructor(private inboxService:InboxService,
              private userService:UserService,
              private clientService:ClientService,
              private messengerService :MessengerService
              ){}

  private emitterSub!:Subscription;


  selected:boolean=false;
  submitForm!:FormGroup;
  recieverID!:String;
  recieverDisplay!:String;
  recieverPicture!:String;
  clientID!:String;
  sessionID!:String;


  ngOnInit(): void {
   

    this.submitForm = new FormGroup({
    'content': new FormControl(null)
  })


  this.clientID = this.clientService.currentClientID;
  this.emitterSub = this.inboxService.recieverEmmitter.pipe(
    tap(ID=>this.recieverID=ID),
    tap(ID=>this.recieverDisplay= this.userService.users.filter(user=>user.userID===ID)[0].nameDisplay),
    tap(ID=>this.recieverPicture= this.userService.users.filter(user=>user.userID===ID)[0].profilePicture),
    tap(ID => this.selected =true)
    )
    .subscribe()
  }


  ngOnDestroy(): void {
    this.emitterSub.unsubscribe()
  }


  getSessionID(){
    if(this.selected){
      this.sessionID = this.messengerService.sessions.filter(session=> session.participant.includes(this.clientID)&&session.participant.includes(this.recieverID))[0].sessionID
    }


  }

  onSubmit(){
// append a new message 
  this.getSessionID();
  this.messengerService.appendMessage(this.sessionID,this.submitForm.value.content,this.clientID,'999')
  this.submitForm.reset()
  this.inboxService.messageUpdateEmmiter.next(true);
  }

}
