import {Todos} from "../Todos";

export interface GetTodosRepository {

    getAll(): Promise<Todos>
}
