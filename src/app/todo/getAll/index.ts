import {GetAllTodos} from "./GetAllTodos";
import {GetAllTodosImpl} from "./GetAllTodosImpl";
import Repositories from "../../../infrastructure/repository/todo";

export const getAllTodos: GetAllTodos = new GetAllTodosImpl(Repositories.getAll)
