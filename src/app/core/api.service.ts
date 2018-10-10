import { Post } from './../shared/classes/post.class';
import { Feed } from './../shared/classes/feed.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const redditListUrl = 'https://www.reddit.com/reddits.json';
const subRedditUrl = 'https://www.reddit.com/r/sweden.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getRedditList(): Observable<any> {
    return this.http.get(redditListUrl);
  }

  getSubreddit(name: string, limit: number): Observable<Feed> {
    return this.http
      .get(subRedditUrl)
      .pipe(
        map(res => {
          return this.buildFeed(res);
        })
      );
  }

  private buildFeed(raw): Feed {
    return new Feed(
      raw.data.after,
      raw.data.before,
      raw.data.children.map(el => this.buildPost(el))
    );
  }

  private buildPost(raw): Post {
    const postDate = new Date(null);
    postDate.setTime(+raw.data.created * 1000);
    return new Post(
      raw.data.id,
      raw.data.author_fullname,
      postDate,
      raw.data.thumbnail,
      raw.data.num_comments,
      'https://reddit.com' + raw.data.permalink,
      raw.data.title,
      raw.data.selftext
    );
  }
}
