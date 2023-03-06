import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientMessageComponent } from './client-message/client-message.component';
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, ClientMessageComponent, ReactiveFormsModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent   {
  constructor(

  ) {}

}
