import { TodoId } from "../TodoId";
import { Todo } from "../Todo";

export interface CompleteTodoRepository {
  complete(todoId: TodoId): Promise<Todo>;
}
