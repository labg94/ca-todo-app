import { TodoId } from "../../../domain/todo/TodoId";
import { Todo } from "../../../domain/todo/Todo";

export interface WorkingOnTodo {
  workingOn(todoId: TodoId): Promise<Todo>;
}
