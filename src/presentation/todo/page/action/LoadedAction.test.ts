import { TodoCommandAction } from "./TodoCommandAction";
import { LoadedAction } from "./LoadedAction";
import { TodosPageStore } from "../store/TodosPageStore";
import { noChangedKeys } from "./test/TodoCommandActionCommon";

describe("LoadedAction test", () => {
  describe("when execute is called", () => {
    const action: TodoCommandAction = new LoadedAction();
    const initialStore: TodosPageStore = TodosPageStore.init().copy({ loading: true });

    const updatedStore = action.execute(initialStore);
    test("the new loading should be false", () => expect(updatedStore.loading).toBeFalsy());

    test("the returned store should not be the same instance", () => expect(initialStore === updatedStore).toBeFalsy());

    noChangedKeys({ changedKey: "loading", initialStore, updatedStore });
  });
});
