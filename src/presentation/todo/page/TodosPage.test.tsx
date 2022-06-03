import React from "react";
import { findByTestAttr, ReactUseReducerType } from "../../../../test/testUtils";
import { mount, shallow, ShallowWrapper } from "enzyme";
import TodosPage from "./TodosPage";
import { TodosPageStore } from "./store/TodosPageStore";
import { Todo } from "../../../domain/todo/Todo";
import { Todos } from "../../../domain/todo/Todos";
import { UpdateTodosAction } from "./action/UpdateTodosAction";
import { AddTaskAction } from "./action/AddTaskAction";

describe("TodosPage tests", () => {
  const realUseReducer: ReactUseReducerType = React.useReducer;

  afterEach(() => {
    React.useReducer = realUseReducer;
  });

  const dispatch = jest.fn();

  describe("when rendered (shallowed)", () => {
    describe("and the state is loading", () => {
      let loaderTag: ShallowWrapper;
      let templateTag: ShallowWrapper;

      beforeEach(() => {
        React.useReducer = jest.fn(() => [TodosPageStore.init().copy({ loading: true }), jest.fn()]);

        const wrapper = shallow(<TodosPage />);
        loaderTag = findByTestAttr(wrapper, "loader");
        templateTag = findByTestAttr(wrapper, "todo-template");
      });

      test("the loader should be displayed", () => {
        expect(loaderTag.exists()).toBeTruthy();
      });
      test("the template should not be displayed", () => {
        expect(templateTag.exists()).toBeFalsy();
      });
    });
    describe("and the state is not loading", () => {
      let loaderTag: ShallowWrapper;
      let templateTag: ShallowWrapper;
      const todos = Todos.init().updateTodos(Todo.of("Dummy"));
      beforeEach(() => {
        React.useReducer = jest.fn(() => [TodosPageStore.init().copy({ loading: false, todos }), dispatch]);

        const wrapper = shallow(<TodosPage />);
        loaderTag = findByTestAttr(wrapper, "loader");
        templateTag = findByTestAttr(wrapper, "todo-template");
      });

      test("the loader should not be displayed", () => {
        expect(loaderTag.exists()).toBeFalsy();
      });
      test("the template should be displayed", () => {
        expect(templateTag.exists()).toBeTruthy();
      });

      test("the header in the template should be 'these are all the TODOS'", () => {
        expect(templateTag.prop("header")).toBe("these are all the TODOS");
      });
      test("the todos in the template should be the same as the state", () => {
        expect(templateTag.prop("todos")).toBe(todos);
      });

      test("the updateTodos should call the right action", () => {
        const updateTodos: (todos: Todos) => void = templateTag.prop("updateTodos");

        updateTodos(Todos.init());

        expect(dispatch).toHaveBeenCalledWith(expect.any(UpdateTodosAction));
      });
      test("the updateTask should call the right action", () => {
        const updateTask: (task: string) => void = templateTag.prop("updateTask");

        updateTask("dummy");

        expect(dispatch).toHaveBeenCalledWith(expect.any(AddTaskAction));
      });
      test("the createTask should call the right action", async () => {
        const createTask: () => Promise<void> = templateTag.prop("createTask");

        await createTask();

        expect(dispatch).toHaveBeenCalledWith(expect.any(AddTaskAction));
        expect(dispatch).toHaveBeenCalledWith(expect.any(UpdateTodosAction));
      });
    });
  });

  describe("when rendered (mount)", () => {
    const mounted = mount(<TodosPage />);

    //TODO: check a better way to test the useEffect
    test("should show the loader", () => {
      expect(findByTestAttr(mounted, "loader").exists()).toBeTruthy();
    });
  });
});
