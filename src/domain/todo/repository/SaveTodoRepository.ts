import {Todo} from "../Todo";

export interface SaveTodoRepository {

    save(task: string): Promise<Todo>
}
