import {TodoRepository} from "../../../domain/todo/TodoRepository";
import {TodoId} from "../../../domain/todo/TodoId";
import {WorkingOnTodo} from "./WorkingOnTodo";
import {Todo} from "../../../domain/todo/Todo";

export class WorkingOnTodoImpl implements WorkingOnTodo {

    constructor(private readonly repository: TodoRepository) {
    }

    workingOn = async (todoId: TodoId): Promise<Todo> => this.repository.workingOn(todoId);
}
