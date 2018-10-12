import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(res => {
      this.before = res.before || this.before;
      this.after = res.after || this.after;
      this.limit = res.limit || this.limit;
      this.name = res.name || this.name;
      this.getFeed();
    });
  }

  ngOnInit() {
  }

  getFeed() {
    this.api.getSubreddit(this.name, this.limit, this.before, this.after)
      .subscribe(res => this.feed = res);
  }

  navigateToPage(type) {
    if (!type) {
      this.goToPrevious();
    } else {
      this.goToNext();
    }
  }

  goToPrevious() {
    this.after = null;
    const params = {
      name: this.name,
      before: this.feed.posts[0].name,
      limit: this.limit
    };
    this.router.navigate(['/feed'], {queryParams: params});

  }

  goToNext() {
    this.before = null;
    const params = {
      name: this.name,
      after: this.feed.posts[this.feed.posts.length - 1].name,
      limit: this.limit
    };
    this.router.navigate(['/feed'], {queryParams: params});
  }

}
