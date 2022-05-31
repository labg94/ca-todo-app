import {Todo} from "../../../../../../domain/todo/Todo";
import {TodoState} from "../../../../../../domain/todo/TodoState";
import {workingOnTodo} from "../../../../../../app/todo/workingOn";
import {TodoVisitor} from "./TodoVisitor";

export class CreatedVisitor implements TodoVisitor {
    actionLabel: string = "Working on";
    style: string = "purple";

    allowed = (todo: Todo): boolean => todo.state === TodoState.CREATED;

    visit = async (todo: Todo): Promise<Todo> => workingOnTodo.workingOn(todo.id);
}
