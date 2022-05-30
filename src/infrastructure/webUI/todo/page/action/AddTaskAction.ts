import {TodosPageStore, TodosPageStoreBuilder} from "../store/TodosPageStore";
import {TodoCommandAction} from "./TodoCommandAction";

export class AddTaskAction implements TodoCommandAction {

    private readonly builder: TodosPageStoreBuilder;

    constructor(private readonly task: string) {
        this.builder = {task}
    }


    execute = (store: TodosPageStore): TodosPageStore => store.copy(this.builder);
}
