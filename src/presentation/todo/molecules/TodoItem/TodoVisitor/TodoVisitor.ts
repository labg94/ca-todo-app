import {Todo} from "../../../../../domain/todo/Todo";

export interface TodoVisitor {
    style: string
    actionLabel: string

    allowed(todo: Todo): boolean

    visit(todo: Todo): Promise<Todo>

}

