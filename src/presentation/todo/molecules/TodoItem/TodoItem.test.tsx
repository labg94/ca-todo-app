import { Todo } from "../../../../domain/todo/Todo";
import { TodoVisitor } from "./TodoVisitor/TodoVisitor";
import Mother from "./TodoVisitor/test/VisitorsMother";
import { shallow } from "enzyme";
import { TodoItem } from "./TodoItem";
import { findByTestAttr } from "../../../../../test/testUtils";
jest.mock("./TodoVisitor");

describe("TodoItem test", () => {
  const { workingVisitor, createdVisitor, doneVisitor } = Mother.visitors;

  describe("When rendered", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    interface visitorTests {
      todo: Todo;
      visitor: TodoVisitor;
    }

    const cases: visitorTests[] = [
      { todo: Todo.of("created"), visitor: createdVisitor },
      { todo: Todo.of("workingOn").workingOn(), visitor: workingVisitor },
      { todo: Todo.of("complete").complete(), visitor: doneVisitor },
    ];

    const updateTodos = jest.fn();

    describe.each(cases)("the rendering", ({ todo, visitor }) => {
      const wrapper = shallow(<TodoItem todo={todo} updateTodos={updateTodos} />);
      const itemTag = findByTestAttr(wrapper, "todo-item");

      test("the item should be displayed", () => {
        expect(itemTag.exists()).toBeTruthy();
      });

      test("the text should contain the todo task", () => {
        expect(itemTag.text()).toContain(todo.task.value);
      });

      test("the color of the text should be the visitors one", () => {
        expect(itemTag.prop("style").color).toBe(visitor.style);
      });

      describe("when the visitor has action", () => {
        const buttonTag = findByTestAttr(wrapper, "action-button");

        test("the button should be displayed", () => {
          expect(buttonTag.exists()).toBe(!!visitor.actionLabel);
        });

        test(`the label of the button should be ${visitor.actionLabel}`, () => {
          if (!visitor.actionLabel) {
            return;
          }
          expect(buttonTag.prop("children")).toBe(visitor.actionLabel);
        });

        describe("When the button is clicked", () => {
          //TODO: read the todo below
          // const returned = visitor.visit(todo);

          beforeEach(async () => {
            if (!visitor.actionLabel) {
              return;
            }
            const toClick = buttonTag.prop("onClick");
            await toClick();
          });
          //TODO: check how to test this, is getting a promise
          // test("should call the visitor action", () => {
          //   expect(updateTodos).toBeCalledWith(returned);
          // });

          test("should be called only once", () => {
            if (!visitor.actionLabel) {
              return;
            }
            expect(updateTodos).toBeCalledTimes(1);
          });
        });
      });
    });
  });
});
