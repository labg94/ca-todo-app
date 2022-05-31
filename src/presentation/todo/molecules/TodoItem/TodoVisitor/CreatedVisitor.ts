import {Todo} from "../../../../../domain/todo/Todo";
import {TodoState} from "../../../../../domain/todo/TodoState";
import {TodoVisitor} from "./TodoVisitor";
import {WorkingOnTodo} from "../../../../../app/todo/workingOn/WorkingOnTodo";

export class CreatedVisitor implements TodoVisitor {
    actionLabel: string = "Working on";
    style: string = "purple";

    constructor(private readonly workingOnTodo: WorkingOnTodo ) {
    }


    allowed = (todo: Todo): boolean => todo.state === TodoState.CREATED;

    visit = async (todo: Todo): Promise<Todo> => this.workingOnTodo.workingOn(todo.id);
}
