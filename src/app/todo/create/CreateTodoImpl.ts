import {TodoRepository} from "../../../domain/todo/TodoRepository";
import {CreateTodo} from "./CreateTodo";
import {Todo} from "../../../domain/todo/Todo";

export class CreateTodoImpl implements CreateTodo {
    constructor(private readonly repository: TodoRepository) {
    }

    create = async (task: string): Promise<Todo> => {
        console.log("Create called")
        return this.repository.save(task);
    };
}
