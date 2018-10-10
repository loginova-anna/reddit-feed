import { Post } from './../classes/post.class';
import { ApiService } from './../../core/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() post: Post;
  constructor(private api: ApiService) { }

  ngOnInit() {
    console.log(this.post);
  }

}
