import { CreateTodo } from "./CreateTodo";
import { CreateTodoImpl } from "./CreateTodoImpl";
import Repositories from "../../../infrastructure/repository/todo";

export const createTodo: CreateTodo = new CreateTodoImpl(Repositories.saveTodo);
