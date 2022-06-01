import { createTodo } from "./index";
import { CreateTodoImpl } from "./CreateTodoImpl";

describe("CreateTodo test", () => {
  test("the instance should be the type CreateTodoImpl", () =>
    expect(createTodo instanceof CreateTodoImpl).toBeTruthy());
});
