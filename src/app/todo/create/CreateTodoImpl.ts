import {CreateTodo} from "./CreateTodo";
import {Todo} from "../../../domain/todo/Todo";
import {SaveTodoRepository} from "../../../domain/todo/repository/SaveTodoRepository";

export class CreateTodoImpl implements CreateTodo {
    constructor(private readonly repository: SaveTodoRepository) {
    }

    create = async (task: string): Promise<Todo> => this.repository.save(task);
}
