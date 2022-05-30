import {CreateTodo} from "./CreateTodo";
import {CreateTodoImpl} from "./CreateTodoImpl";
import {todoRepository} from "../../../infrastructure/repository/todo";


export const createTodo: CreateTodo = new CreateTodoImpl(todoRepository)
