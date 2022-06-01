import { TodoId } from "../../../../domain/todo/TodoId";
import { Todos } from "../../../../domain/todo/Todos";
import { Todo } from "../../../../domain/todo/Todo";
import { SaveTodoRepository } from "../../../../domain/todo/repository/SaveTodoRepository";
import { WorkingOnTodoRepository } from "../../../../domain/todo/repository/WorkingOnTodoRepository";
import { GetTodosRepository } from "../../../../domain/todo/repository/GetTodosRepository";
import { CompleteTodoRepository } from "../../../../domain/todo/repository/CompleteTodoRepository";

export class MemoryTodo
  implements SaveTodoRepository, WorkingOnTodoRepository, GetTodosRepository, CompleteTodoRepository
{
  private todos: Todos = Todos.init();

  getAll = async (): Promise<Todos> => this.todos;

  save = async (task: string): Promise<Todo> => {
    const todo = Todo.of(task);
    this.todos = this.todos.updateTodos(todo);
    return todo;
  };

  complete = async (todoId: TodoId): Promise<Todo> => this.updateTodos(this.todos.completed(todoId));

  workingOn = async (todoId: TodoId): Promise<Todo> => this.updateTodos(this.todos.workingOn(todoId));

  private updateTodos(updated: Todo) {
    this.todos = this.todos.updateTodos(updated);
    return updated;
  }
}
