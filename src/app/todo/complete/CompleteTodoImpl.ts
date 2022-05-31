import {TodoId} from "../../../domain/todo/TodoId";
import {Todo} from "../../../domain/todo/Todo";
import {CompleteTodo} from "./CompleteTodo";
import {CompleteTodoRepository} from "../../../domain/todo/repository/CompleteTodoRepository";

export class CompleteTodoImpl implements CompleteTodo {

    constructor(private readonly repository: CompleteTodoRepository) {
    }

    complete = async (todoId: TodoId): Promise<Todo> => this.repository.complete(todoId);
}
