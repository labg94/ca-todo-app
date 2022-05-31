import {Todo} from "../../../../../domain/todo/Todo";
import {TodoState} from "../../../../../domain/todo/TodoState";
import {TodoVisitor} from "./TodoVisitor";
import {completeTodo} from "../../../../../app/todo/complete";

export class WorkingVisitor implements TodoVisitor {
    actionLabel: string = "Complete";
    style: string = "blue";


    visit = (todo: Todo): Promise<Todo> => completeTodo.complete(todo.id);

    allowed = (todo: Todo): boolean => todo.state == TodoState.WORKING;
}
