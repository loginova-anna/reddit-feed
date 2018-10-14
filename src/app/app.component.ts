import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './core/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  subReddits;
  constructor(private api: ApiService, private router: Router) {
    this.api.subRedditName.subscribe(res => this.title = res);
  }

  ngOnInit() {
    this.api.getRedditList().subscribe(res => {
      this.subReddits = res;
    });
  }

  navigateToMain() {
    this.router.navigate(['/feed'], {queryParams: {name: this.title}});
  }

  goToSubreddit(sr) {
    this.router.navigate(['/feed'], {queryParams: {name: sr}});
  }

}
