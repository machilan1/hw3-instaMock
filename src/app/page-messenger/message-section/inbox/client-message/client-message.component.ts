import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-message.component.html',
  styleUrls: ['./client-message.component.scss'],
})
export class ClientMessageComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
