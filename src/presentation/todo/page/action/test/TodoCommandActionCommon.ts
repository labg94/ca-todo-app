import { TodosPageStore } from "../../store/TodosPageStore";

type noChangedKeysParam = {
  changedKey: string;
  initialStore: TodosPageStore;
  updatedStore: TodosPageStore;
};
export const noChangedKeys = ({ changedKey, initialStore, updatedStore }: noChangedKeysParam) => {
  const store = initialStore;
  const keys = Object.keys(store)
    // @ts-ignore
    .filter((key) => typeof store[key] !== "function")
    .filter((key) => key !== changedKey);

  return test.each(keys)("the value of the key %s should not be updated", (key) => {
    // @ts-ignore
    expect(updatedStore[key]).toBe(initialStore[key]);
  });
};
