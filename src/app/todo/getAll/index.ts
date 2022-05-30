import {GetAllTodos} from "./GetAllTodos";
import {GetAllTodosImpl} from "./GetAllTodosImpl";
import {todoRepository} from "../../../infrastructure/repository/todo";

export const getAllTodos: GetAllTodos = new GetAllTodosImpl(todoRepository)
