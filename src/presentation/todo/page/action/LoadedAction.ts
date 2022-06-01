import { TodosPageStore } from "../store/TodosPageStore";
import { TodoCommandAction } from "./TodoCommandAction";

export class LoadedAction implements TodoCommandAction {
  execute = (store: TodosPageStore): TodosPageStore => store.copy({ loading: false });
}
