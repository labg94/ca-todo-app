import {TodoId} from "../../../domain/todo/TodoId";
import {WorkingOnTodo} from "./WorkingOnTodo";
import {Todo} from "../../../domain/todo/Todo";
import {WorkingOnTodoRepository} from "../../../domain/todo/repository/WorkingOnTodoRepository";

export class WorkingOnTodoImpl implements WorkingOnTodo {

    constructor(private readonly repository: WorkingOnTodoRepository) {
    }

    workingOn = async (todoId: TodoId): Promise<Todo> => this.repository.workingOn(todoId);
}
