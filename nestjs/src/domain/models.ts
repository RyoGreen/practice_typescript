export class User {
  id: number;
  email: string;
  name: string;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
  }
}

export class Post {
  id: number;
  title: string;
  contexnt?: string;
  published: boolean;

  userId: number;

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.contexnt = post.contexnt;
    this.published = post.published;
    this.userId = post.userId;
  }
}
