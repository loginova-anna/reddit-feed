import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../core/api.service';
import { Feed } from '../shared/classes/feed.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feed: Feed;
  before = null;
  after = null;
  limit = 10;
  name = '';
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.before = res.before || this.before;
      this.after = res.after || this.after;
      this.limit = res.limit || this.limit;
      this.name = res.name || this.name;
      this.getFeed();
    });
  }

  ngOnInit() {
    // this.api.getSubreddit('', 0).subscribe(res => {console.log('feed', res); this.feed = res; });
  }

  getFeed() {
    this.api.getSubreddit(this.name, this.limit, this.before, this.after).subscribe(res => { this.feed = res; });
  }

  navigateToPage(type) {
    if (!type) {
      this.goToPrevious();
    } else {
      this.goToNext();
    }
  }

  goToPrevious() {
    if (!this.feed.before) {
      return;
    }
    console.log(this.feed.before);

  }

  goToNext() {
    console.log(this.feed.after);
  }

}
