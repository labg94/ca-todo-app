import { completeTodo } from "./index";
import { CompleteTodoImpl } from "./CompleteTodoImpl";

describe("CompleteTodo test", () => {
  test("the instance should be the type CompleteTodoImpl", () =>
    expect(completeTodo instanceof CompleteTodoImpl).toBeTruthy());
});
