import { Comment } from './../shared/classes/comment.class';
import { Post } from './../shared/classes/post.class';
import { Feed } from './../shared/classes/feed.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'https://www.reddit.com';
const redditListUrl = baseUrl + '/reddits.json';
const subRedditUrl = baseUrl + '/r/';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getRedditList(): Observable<any> {
    return this.http.get(redditListUrl);
  }

  getSubreddit(name: string, limit: number, before: string, after: string): Observable<Feed> {
    name = name || 'sweden';
    const params = (limit ? `limit=${limit}&` : '') + (before ? `before=${before}&` : '') + (after ? `after=${after}` : '');
    const url = subRedditUrl + name + '.json' + (params ? '?' + params : '');
    console.log(url);
    return this.http
      .get(url)
      .pipe(
        map(res => {
          return this.buildFeed(res);
        })
      );
  }

  loadPost(postPermaLink: string): Observable<Post> {
    postPermaLink = postPermaLink.slice(0, -1);
    return this.http
      .get(`${baseUrl}${postPermaLink}.json`)
      .pipe(
        map(res => {
          return this.buildPost(res[0].data.children[0], res[1]);
        })
      );
  }

  private buildComments(data): Comment[] {
    if (!data || !data.data.children.length) {
      return [];
    }
    const raw = data.data.children;
    const comments = [];
    let newComment;

    raw.forEach(el => {
      if (!el.data.author) { return; }
      newComment = new Comment(
        el.data.id,
        el.data.body,
        el.data.author,
        this.buildDateFromSecs(+el.data.created),
        +el.data.score,
        this.buildComments(el.data.replies)
      );
      comments.push(newComment);
    });
    return comments;
  }

  private buildFeed(raw): Feed {
    return new Feed(
      raw.data.after,
      raw.data.before,
      raw.data.children.map(el => this.buildPost(el))
    );
  }

  private buildPost(raw, comms?): Post {
    const postDate = this.buildDateFromSecs(+raw.data.created);
    let thumbnail = raw.data.thumbnail;
    thumbnail = thumbnail === 'self' || thumbnail === 'default' ? '' : thumbnail;
    const previewSource = raw.data.preview ? raw.data.preview.images[0].source : null;
    const preview = previewSource ? {
      url: previewSource.url.replace(/&amp;/g, '&'),
      width: previewSource.width,
      height: previewSource.height
    } : null;
    return new Post(
      raw.data.id,
      raw.data.name,
      raw.data.author,
      postDate,
      thumbnail,
      raw.data.num_comments,
      raw.data.permalink,
      raw.data.title,
      raw.data.selftext,
      raw.data.score,
      preview,
      comms ? this.buildComments(comms) : null
    );
  }

  private buildDateFromSecs(seconds): Date {
    const theDate = new Date(null);
    theDate.setTime(seconds * 1000);
    return theDate;
  }
}
