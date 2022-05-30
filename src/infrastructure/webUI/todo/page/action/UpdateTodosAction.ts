import {TodosPageStore, TodosPageStoreBuilder} from "../store/TodosPageStore";
import {Todos} from "../../../../../domain/todo/Todos";
import {TodoCommandAction} from "./TodoCommandAction";

export class UpdateTodosAction implements TodoCommandAction {

    private readonly builder: TodosPageStoreBuilder;

    constructor(private readonly todos: Todos) {
        this.builder = {todos}
    }

    execute = (store: TodosPageStore): TodosPageStore => store.copy(this.builder);
}
