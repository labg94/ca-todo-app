import {Todo} from "../../../../../../domain/todo/Todo";
import {TodoVisitor} from "./TodoVisitor";

export class DoneVisitor implements TodoVisitor {
    actionLabel: string = "";
    style: string = "red";

    visit = async (todo: Todo): Promise<Todo> => todo;

    allowed = (_todo: Todo): boolean => true;
}
