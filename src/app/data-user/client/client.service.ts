import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../users/users.service';
import {map} from'rxjs'

@Injectable({ providedIn: 'root' })
export class ClientService   {
  constructor(
    private userService :UserService
  ){}
  clientLogged!: Observable<boolean>;
  currentClientID: string = 'leo369';
  currentClientID$ = new BehaviorSubject<string>(this.currentClientID);
  clientPic$ = this.userService.users$.pipe(map(users=>users.filter(user=>user.userID===this.currentClientID)[0].profilePicture))
}
