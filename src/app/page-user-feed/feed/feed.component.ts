import { Component,Input ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedService } from '../component-services/feed.service';
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
    private feedService :FeedService
    ){}
    
    // esse
    @Input()posts$!:BehaviorSubject<Post[]>


    ngOnInit(): void {
      
    }

  }


  
