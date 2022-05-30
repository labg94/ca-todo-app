import {GetAllTodos} from "./GetAllTodos";
import {TodoRepository} from "../../../domain/todo/TodoRepository";
import {Todos} from "../../../domain/todo/Todos";

export class GetAllTodosImpl implements GetAllTodos {
    constructor(readonly repository: TodoRepository) {
    }

    getAll = async (): Promise<Todos> =>  this.repository.getAll();
}
