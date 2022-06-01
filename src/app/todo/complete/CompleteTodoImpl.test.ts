import { TodoId } from "../../../domain/todo/TodoId";
import { Todo } from "../../../domain/todo/Todo";
import { CompleteTodoRepository } from "../../../domain/todo/repository/CompleteTodoRepository";
import { CompleteTodo } from "./CompleteTodo";
import { CompleteTodoImpl } from "./CompleteTodoImpl";

describe("CompleteTodoImpl test", () => {
  const todo: Todo = Todo.of("Dummy");
  const complete: (todoId: TodoId) => Promise<Todo> = jest.fn(async () => todo);

  const dummyRepository: CompleteTodoRepository = { complete };

  const useCase: CompleteTodo = new CompleteTodoImpl(dummyRepository);

  describe("when complete is called", () => {
    let todoGotten: Todo;

    beforeEach(async () => {
      jest.clearAllMocks();
      todoGotten = await useCase.complete(todo.id);
    });

    test("the repository should be called with the id parameter", () => {
      expect(complete).toBeCalledWith(todo.id);
    });

    test("the repository should be called once", () => {
      expect(complete).toBeCalledTimes(1);
    });

    test("the return value should be the one from the repository", () => {
      expect(todoGotten).toBe(todo);
    });
  });
});
