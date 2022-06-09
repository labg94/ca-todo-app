import { TodoId } from "./TodoId";
import { TodoState } from "./TodoState";
import { Task } from "./Task";

export interface TodoBuilder {
  id?: TodoId;
  task?: Task;
  state?: TodoState;
  creationDate?: Date;
}

export class Todo {
  readonly id: TodoId;
  readonly task: Task;
  readonly state: TodoState;
  readonly creationDate: Date;

  private constructor({ state = TodoState.CREATED, creationDate = new Date(), id = new TodoId(), task }: TodoBuilder) {
    this.id = id;
    this.task = task!!;
    this.state = state;
    this.creationDate = creationDate;
  }

  static of = (task: string) => new Todo({ task: new Task(task) });

  complete = () => this.copy({ state: TodoState.DONE });

  workingOn = () => this.copy({ state: TodoState.WORKING });

  sameId = (todoId: TodoId): boolean => this.id.value === todoId.value;

  private copy = (builder: TodoBuilder) => new Todo({ ...this, ...builder });

  static from = (builder: TodoBuilder) => new Todo(builder);
}
