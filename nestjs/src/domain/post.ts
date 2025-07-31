export class Post {
  id: number;
  userId: number;
  title: string;
  contexnt: string;
  published: boolean;

  constructor(post: Post) {
    this.id = post.id;
    this.userId = post.userId;
    this.title = post.title;
    this.contexnt = post.contexnt;
    this.published = post.published;
  }
}

export interface IPostRepository {
  Get(): Promise<Post[]>;
  GetById(id: number): Promise<Post | null>;
  Create(post: Post): Promise<Post>;
  Update(post: Post): Promise<Post>;
  Delete(id: number): Promise<void>;
}
