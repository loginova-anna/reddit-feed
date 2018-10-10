import { Post } from './post.class';
export class Feed {
  constructor(
    public after: string,
    public before: string,
    public posts: Post[]
  ) {}
}
