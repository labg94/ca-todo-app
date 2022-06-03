import { TodoCommandAction } from "./TodoCommandAction";
import { LoadingAction } from "./LoadingAction";
import { TodosPageStore } from "../store/TodosPageStore";
import { noChangedKeys } from "./test/TodoCommandActionCommon";

describe("LoadingAction test", () => {
  describe("when execute is called", () => {
    const action: TodoCommandAction = new LoadingAction();
    const initialStore: TodosPageStore = TodosPageStore.init();

    const updatedStore = action.execute(initialStore);
    test("the new loading should be true", () => expect(updatedStore.loading).toBeTruthy());

    test("the returned store should not be the same instance", () => expect(initialStore === updatedStore).toBeFalsy());

    noChangedKeys({ changedKey: "loading", initialStore, updatedStore });
  });
});
