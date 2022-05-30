import {WorkingOnTodo} from "./WorkingOnTodo";
import {WorkingOnTodoImpl} from "./WorkingOnTodoImpl";
import {todoRepository} from "../../../infrastructure/repository/todo";

export const workingOnTodo: WorkingOnTodo = new WorkingOnTodoImpl(todoRepository)
