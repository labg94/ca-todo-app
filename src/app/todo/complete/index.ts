import {CompleteTodo} from "./CompleteTodo";
import {CompleteTodoImpl} from "./CompleteTodoImpl";
import Repositories from "../../../infrastructure/repository/todo";

export const completeTodo: CompleteTodo = new CompleteTodoImpl(Repositories.complete)
