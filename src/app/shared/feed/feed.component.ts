import { Feed } from './../classes/feed.class';
import { Post } from './../classes/post.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  constructor() { }

  ngOnInit() {
    console.log(this.feed);
  }

}
