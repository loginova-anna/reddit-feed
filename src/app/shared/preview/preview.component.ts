import { Comment } from './../classes/comment.class';
import { Post } from './../classes/post.class';
import { ApiService } from './../../core/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() post: Post;
  threads: Comment[];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  navigateToPost() {
    this.router.navigateByUrl('/post?id=' + this.post.permalink);
  }

}
