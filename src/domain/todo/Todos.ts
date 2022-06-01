import { Todo } from "./Todo";
import { TodoId } from "./TodoId";

export class Todos {
  private readonly todos: Todo[];

  private constructor(todos: Todo[]) {
    this.todos = todos;
  }

  static init = (): Todos => new Todos([]);

  all = () => this.todos;

  sorted = () => this.todos.sort((a, b) => a.state - b.state);

  workingOn = (todoId: TodoId): Todo => this.updateTodo(todoId, (todo) => todo.workingOn());

  completed = (todoId: TodoId): Todo => this.updateTodo(todoId, (todo) => todo.complete());

  updateTodos = (todo: Todo): Todos => new Todos(this.replaceOldTodo(todo));

  private updateTodo = (todoId: TodoId, update: (todo: Todo) => Todo) => update(this.findTodoById(todoId));

  private replaceOldTodo = (todoUpdated: Todo): Todo[] => [
    ...this.todos.filter((value) => !value.sameId(todoUpdated.id)),
    todoUpdated,
  ];

  private findTodoById(todoId: TodoId): Todo {
    const todo = this.todos.find((value) => value.sameId(todoId));

    if (!todo) throw new Error(`Todo with id ${todoId.value} does not exist`);

    return todo;
  }
}
