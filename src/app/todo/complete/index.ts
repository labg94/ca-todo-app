import {CompleteTodo} from "./CompleteTodo";
import {CompleteTodoImpl} from "./CompleteTodoImpl";
import {todoRepository} from "../../../infrastructure/repository/todo";

export const completeTodo: CompleteTodo = new CompleteTodoImpl(todoRepository)
