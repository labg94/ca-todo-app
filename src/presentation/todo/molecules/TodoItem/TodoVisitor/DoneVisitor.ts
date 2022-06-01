import {Todo} from "../../../../../domain/todo/Todo";
import {TodoVisitor} from "./TodoVisitor";
import {TodoState} from "../../../../../domain/todo/TodoState";

export class DoneVisitor implements TodoVisitor {
    actionLabel: string = "";
    style: string = "red";

    visit = async (todo: Todo): Promise<Todo> => todo;

    allowed = (todo: Todo): boolean => todo.state === TodoState.DONE;
}
