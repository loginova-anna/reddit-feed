import { Feed } from './shared/classes/feed.class';
import { ApiService } from './core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reddit-feed';
  // feed: Feed;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getRedditList().subscribe(res => console.log(res));
    // this.api.getSubreddit('', 0).subscribe(res => {console.log(res); this.feed = res; });
  }

}
