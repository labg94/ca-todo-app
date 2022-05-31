import {GetAllTodos} from "./GetAllTodos";
import {Todos} from "../../../domain/todo/Todos";
import {GetTodosRepository} from "../../../domain/todo/repository/GetTodosRepository";

export class GetAllTodosImpl implements GetAllTodos {
    constructor(readonly repository: GetTodosRepository) {
    }

    getAll = async (): Promise<Todos> =>  this.repository.getAll();
}
