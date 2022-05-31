import {WorkingOnTodo} from "./WorkingOnTodo";
import {WorkingOnTodoImpl} from "./WorkingOnTodoImpl";
import Repositories from "../../../infrastructure/repository/todo";

export const workingOnTodo: WorkingOnTodo = new WorkingOnTodoImpl(Repositories.workingOn)
