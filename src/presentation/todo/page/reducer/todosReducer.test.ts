import { TodosPageStore } from "../store/TodosPageStore";
import { TodoCommandAction } from "../action/TodoCommandAction";
import { todosReducer } from "./TodosReducer";
import { LoadingAction } from "../action/LoadingAction";

describe("todosReducer test", () => {
  const store = TodosPageStore.init();
  const action: TodoCommandAction = new LoadingAction();

  test("when the reducer is called should execute the action", () => {
    expect(todosReducer(store, action).loading).toBeTruthy();
  });
});
