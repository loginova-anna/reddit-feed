export class Post {
  constructor(
    public id: string,
    public author: string,
    public created: Date,
    public thumbnail: string,
    public numComments: number,
    public permalink: string,
    public title: string,
    public selfText: string
  ) {}
}
