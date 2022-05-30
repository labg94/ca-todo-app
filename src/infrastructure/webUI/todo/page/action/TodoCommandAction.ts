import {TodosPageStore} from "../store/TodosPageStore";

export interface TodoCommandAction {
    execute(store: TodosPageStore): TodosPageStore
}

