import { Todo } from "../../../../../domain/todo/Todo";
import Mother from "./test/VisitorsMother";

describe("WorkingVisitor tests", () => {
  const {
    mocks: { complete },
    stubs: { workingTodoReturned },
    visitors: { workingVisitor },
  } = Mother;

  test("the actionLabel should be 'Complete'", () => expect(workingVisitor.actionLabel).toBe("Complete"));

  test("the  style should be 'blue'", () => expect(workingVisitor.style).toBe("blue"));

  describe("when allowed is called", () => {
    describe("and the todo is with Created Status should return false", () => {
      const createdTodo = Todo.of("Dummy");

      expect(workingVisitor.allowed(createdTodo)).toBeFalsy();
    });

    describe("and the todo is with WorkingOn Status should return true", () => {
      const workingOnTodo = Todo.of("Dummy").workingOn();

      expect(workingVisitor.allowed(workingOnTodo)).toBeTruthy();
    });
    describe("and the todo is with Done Status should return false", () => {
      const completeTodo = Todo.of("Dummy").complete();

      expect(workingVisitor.allowed(completeTodo)).toBeFalsy();
    });
  });

  describe("when visit is called", () => {
    const todo = Todo.of("test");
    let newTodo: Todo;

    beforeEach(async () => {
      jest.clearAllMocks();
      newTodo = await workingVisitor.visit(todo);
    });

    test("the useCase should be called with the todoId from the todo parameter", () =>
      expect(complete).toHaveBeenCalledWith(todo.id));

    test("the useCase should be called only once", () => expect(complete).toHaveBeenCalledTimes(1));

    test("should return the value from the useCase", () => expect(newTodo).toStrictEqual(workingTodoReturned));
  });
});
