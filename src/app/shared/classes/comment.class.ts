export class Comment {
  constructor(
    public id: string,
    public text: string,
    public author: string,
    public created: Date,
    public score: number,
    public replies?: Comment[]
  ) {}
}
