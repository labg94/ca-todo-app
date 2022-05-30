import {Todos} from "../../../../../domain/todo/Todos";

export interface TodosPageStoreBuilder {
    todos?: Todos
    task?: string
    loading?: boolean
}


export class TodosPageStore {

    readonly todos: Todos
    readonly task: string
    readonly loading: boolean


    private constructor({todos, task, loading}: TodosPageStoreBuilder) {
        this.todos = todos!!;
        this.task = task!!;
        this.loading = loading!!;
    }

    static init = () => new TodosPageStore(
        {todos: Todos.init(), task: "", loading: false});

    copy(builder: TodosPageStoreBuilder) {
        return new TodosPageStore({...this, ...builder})
    }

}
