import { TodoId } from "../../../domain/todo/TodoId";
import { Todo } from "../../../domain/todo/Todo";

export interface CompleteTodo {
  complete(todoId: TodoId): Promise<Todo>;
}
