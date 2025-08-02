export class Status {
  id: number;
  name: string;

  constructor(status: Status) {
    this.id = status.id;
    this.name = status.name;
  }
}

export interface IStatusRepository {
  Get(): Promise<Status[]>;
  GetById(id: number): Promise<Status | null>;
  Create(status: string): Promise<Status>;
  Update(status: Status): Promise<Status>;
  Delete(id: number): Promise<void>;
}
