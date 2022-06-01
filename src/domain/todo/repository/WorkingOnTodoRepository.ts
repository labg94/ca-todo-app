import { TodoId } from "../TodoId";
import { Todo } from "../Todo";

export interface WorkingOnTodoRepository {
  workingOn(todoId: TodoId): Promise<Todo>;
}
