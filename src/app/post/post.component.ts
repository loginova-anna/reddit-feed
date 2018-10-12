import { Post } from '../shared/classes/post.class';
import { ApiService } from './../core/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;
  constructor(private api: ApiService, private route: ActivatedRoute) {
    route.queryParams.subscribe(res => this.loadPost(res.id));
  }


  ngOnInit() {
    console.log(this.post);
  }

  getComments() {
    // this.api.getComments('').subscribe(res => );
  }

  loadPost(postId) {
    console.log('postId', postId);
    this.api.loadPost(postId).subscribe(res => {this.post = res; console.log(this.post); });
  }

}
