import { Todos } from "../../../domain/todo/Todos";
import { Todo } from "../../../domain/todo/Todo";
import { shallow } from "enzyme";
import { TodosList } from "./TodosList";
import { findByTestAttr } from "../../../../test/testUtils";

describe("TodosList test", () => {
  describe("When rendered", () => {
    const todo1 = Todo.of("ABC");
    const todos = Todos.init()
      .updateTodos(todo1)
      .updateTodos(Todo.of("DEF"))
      .updateTodos(Todo.of("GHI"))
      .updateTodos(Todo.of("JKL"));

    const updateTodos = jest.fn();

    const wrapper = shallow(<TodosList updateTodos={updateTodos} todos={todos} />);
    const containerTag = findByTestAttr(wrapper, "container");

    test("should have the same children quantity as the todos in props", () => {
      expect(containerTag.children()).toHaveLength(todos.all().length);
    });

    // @ts-ignore
    test.each([...Array(todos.all().length).keys()])("each child should have the todo as todo prop %s", (index) => {
      const todoAsProp = containerTag.childAt(index).prop("todo");
      expect(todos.all().find((value) => value.sameId(todoAsProp.id))).toBeTruthy();
    });

    test("the updateTodos prop should be added as prop for each item", () => {
      const updateAsProps = containerTag.childAt(0).prop("updateTodos");

      updateAsProps(todo1);

      expect(updateTodos).toHaveBeenCalledWith(expect.any(Todos));
    });
  });
});
