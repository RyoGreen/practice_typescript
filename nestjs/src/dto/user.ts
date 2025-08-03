export class UserIn {
  name: string;
  email: string;

  cunstructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

export class UserOut {
  id: number;
  name: string;
  email: string;

  cunstructor(user: UserOut) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
  }
}
