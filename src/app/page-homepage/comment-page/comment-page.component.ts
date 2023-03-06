import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CommentComponent],
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss'],
})
export class CommentPageComponent {
  constructor(

  ) {}


}
