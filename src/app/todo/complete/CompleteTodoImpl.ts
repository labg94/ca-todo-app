import {TodoRepository} from "../../../domain/todo/TodoRepository";
import {TodoId} from "../../../domain/todo/TodoId";
import {Todo} from "../../../domain/todo/Todo";
import {CompleteTodo} from "./CompleteTodo";

export class CompleteTodoImpl implements CompleteTodo {

    constructor(private readonly repository: TodoRepository) {
    }

    complete = async (todoId: TodoId): Promise<Todo> => this.repository.complete(todoId);
}
