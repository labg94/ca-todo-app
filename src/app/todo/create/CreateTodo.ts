import {Todo} from "../../../domain/todo/Todo";

export interface CreateTodo {

    create(task: string): Promise<Todo>
}
