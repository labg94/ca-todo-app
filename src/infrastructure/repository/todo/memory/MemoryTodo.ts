import {TodoRepository} from "../../../../domain/todo/TodoRepository";
import {TodoId} from "../../../../domain/todo/TodoId";
import {Todos} from "../../../../domain/todo/Todos";
import {Todo} from "../../../../domain/todo/Todo";

export class MemoryTodo implements TodoRepository {

    private todos: Todos = Todos.init()


    getAll = async (): Promise<Todos> => this.todos;

    save = async (task: string): Promise<Todo> => {
        this.todos = this.todos.newTodo(task);
        return this.todos.all()[0];
    };

    complete = async (todoId: TodoId): Promise<Todo> => this.updateTodos(this.todos.completed(todoId));

    workingOn = async (todoId: TodoId): Promise<Todo> => this.updateTodos(this.todos.workingOn(todoId));

    private updateTodos(updated: Todo) {
        this.todos = this.todos.updateTodos(updated)
        return updated;
    }
}
