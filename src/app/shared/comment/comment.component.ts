import { Comment } from './../classes/comment.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() ts: string;
  constructor() { }

  ngOnInit() {
  }

}
