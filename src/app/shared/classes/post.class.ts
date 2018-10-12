import { Comment } from './comment.class';
export class Post {
  constructor(
    public id: string,
    public name: string,
    public author: string,
    public created: Date,
    public thumbnail: string,
    public numComments: number,
    public permalink: string,
    public title: string,
    public text: string,
    public score: number,
    public preview?: any,
    public comments?: Comment[]
  ) {}
}
