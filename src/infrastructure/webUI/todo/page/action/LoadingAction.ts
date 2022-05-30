import {TodosPageStore} from "../store/TodosPageStore";
import {TodoCommandAction} from "./TodoCommandAction";

export class LoadingAction implements TodoCommandAction {
    execute = (store: TodosPageStore): TodosPageStore => store.copy({loading: true});
}
