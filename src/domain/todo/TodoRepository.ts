import {Todo} from "./Todo";
import {TodoId} from "./TodoId";
import {Todos} from "./Todos";

export interface TodoRepository {

    workingOn(todoId: TodoId): Promise<Todo>;

    save(task: string): Promise<Todo>

    getAll(): Promise<Todos>

    complete(todoId: TodoId): Promise<Todo>

}
