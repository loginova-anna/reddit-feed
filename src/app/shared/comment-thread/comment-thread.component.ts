import { Comment } from './../classes/comment.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-thread',
  templateUrl: './comment-thread.component.html',
  styleUrls: ['./comment-thread.component.scss']
})
export class CommentThreadComponent implements OnInit {
  @Input() thread: Comment;
  @Input() ts: string;
  threadOn = true;
  constructor() { }

  ngOnInit() {
  }

  toggleThread() {
    this.threadOn = !this.threadOn;
  }

}
