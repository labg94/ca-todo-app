import { WorkingVisitor } from "./WorkingVisitor";
import { Todo } from "../../../../../domain/todo/Todo";
import { TodoId } from "../../../../../domain/todo/TodoId";
import { CompleteTodo } from "../../../../../app/todo/complete/CompleteTodo";

describe("WorkingVisitor tests", () => {
  const todoReturnedFromUseCase = Todo.of("dummy").complete();
  const complete = jest.fn(async (_id: TodoId) => todoReturnedFromUseCase);
  const useCase: CompleteTodo = { complete };
  const visitor: WorkingVisitor = new WorkingVisitor(useCase);

  test("the actionLabel should be 'Complete'", () => expect(visitor.actionLabel).toBe("Complete"));

  test("the  style should be 'blue'", () => expect(visitor.style).toBe("blue"));

  describe("when allowed is called", () => {
    describe("and the todo is with Created Status should return false", () => {
      const createdTodo = Todo.of("Dummy");

      expect(visitor.allowed(createdTodo)).toBeFalsy();
    });

    describe("and the todo is with WorkingOn Status should return true", () => {
      const workingOnTodo = Todo.of("Dummy").workingOn();

      expect(visitor.allowed(workingOnTodo)).toBeTruthy();
    });
    describe("and the todo is with Done Status should return false", () => {
      const completeTodo = Todo.of("Dummy").complete();

      expect(visitor.allowed(completeTodo)).toBeFalsy();
    });
  });

  describe("when visit is called", () => {
    const todo = Todo.of("test");
    let newTodo: Todo;

    beforeEach(async () => {
      jest.clearAllMocks();
      newTodo = await visitor.visit(todo);
    });

    test("the useCase should be called with the todoId from the todo parameter", () =>
      expect(complete).toHaveBeenCalledWith(todo.id));

    test("the useCase should be called only once", () => expect(complete).toHaveBeenCalledTimes(1));

    test("should return the value from the useCase", () => expect(newTodo).toStrictEqual(todoReturnedFromUseCase));
  });
});
