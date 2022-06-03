import { Todos } from "../../../domain/todo/Todos";
import { shallow } from "enzyme";
import { TodosTemplate, TodosTemplateProps } from "./TodosTemplate";
import { findByTestAttr } from "../../../../test/testUtils";

describe("TodosTemplate test", () => {
  describe("when rendered", () => {
    const todos = Todos.init();
    const updateTodos = jest.fn();
    const task = "dummy task";
    const updateTask = jest.fn();
    const createTask = jest.fn();
    const header = "dummy header";

    const props: TodosTemplateProps = { todos, updateTask, task, createTask, updateTodos, header };

    const wrapper = shallow(<TodosTemplate {...props} />);

    describe("should have a title ", () => {
      const titleTag = findByTestAttr(wrapper, "main-title");

      test("displayed", () => expect(titleTag.exists()).toBeTruthy());
      test("using the header prop as child", () => expect(titleTag.prop("children")).toBe(header));
    });

    describe("should have a button ", () => {
      const buttonTag = findByTestAttr(wrapper, "create-button");

      test("displayed", () => expect(buttonTag.exists()).toBeTruthy());

      test("using the createTask prop as onClick", () => expect(buttonTag.prop("onClick")).toBe(createTask));
    });

    describe("should have a TodoList", () => {
      const listTag = findByTestAttr(wrapper, "todos-list");

      test("displayed", () => expect(listTag.exists()).toBeTruthy());

      test("using the todos prop as todos", () => expect(listTag.prop("todos")).toBe(todos));

      test("using the updateTodos prop as updateTodos", () => expect(listTag.prop("updateTodos")).toBe(updateTodos));
    });
    describe("should have a TextInput", () => {
      const inputTag = findByTestAttr(wrapper, "text-input");

      test("displayed", () => expect(inputTag.exists()).toBeTruthy());

      test("using the task prop as value", () => expect(inputTag.prop("value")).toBe(task));
      test("using the createTask prop as onChange", () => expect(inputTag.prop("onChange")).toBe(updateTask));
    });
  });
});
