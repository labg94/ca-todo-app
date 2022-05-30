import {TodoRepository} from "../../../domain/todo/TodoRepository";
import {MemoryTodo} from "./memory/MemoryTodo";


export const todoRepository: TodoRepository = new MemoryTodo()
