import { Component,Input ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from 'src/app/page-homepage/component-models/post.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  
  constructor(
    ){}
    
    // esse
    @Input()posts$!:Observable<Post[]>


    ngOnInit(): void {
      
    }

  }


  
