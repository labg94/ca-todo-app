import {TodosPageStore} from "../store/TodosPageStore";
import {TodoCommandAction} from "../action/TodoCommandAction";

export const todosReducer = (store: TodosPageStore, action: TodoCommandAction): TodosPageStore => action.execute(store)
