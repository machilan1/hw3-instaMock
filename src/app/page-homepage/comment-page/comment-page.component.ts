import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss'],
})
export class CommentPageComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
