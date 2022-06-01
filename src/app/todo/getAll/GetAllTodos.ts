import { Todos } from "../../../domain/todo/Todos";

export interface GetAllTodos {
  getAll(): Promise<Todos>;
}
