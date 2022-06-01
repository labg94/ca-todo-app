import { Todo } from "../../../../../domain/todo/Todo";
import { TodoState } from "../../../../../domain/todo/TodoState";
import { TodoVisitor } from "./TodoVisitor";
import { CompleteTodo } from "../../../../../app/todo/complete/CompleteTodo";

export class WorkingVisitor implements TodoVisitor {
  actionLabel: string = "Complete";
  style: string = "blue";

  constructor(private readonly completeTodo: CompleteTodo) {}

  visit = (todo: Todo): Promise<Todo> => this.completeTodo.complete(todo.id);

  allowed = (todo: Todo): boolean => todo.state == TodoState.WORKING;
}
