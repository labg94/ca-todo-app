import { Todo } from "../../../../../../domain/todo/Todo";
import { TodoId } from "../../../../../../domain/todo/TodoId";
import { CreatedVisitor } from "../CreatedVisitor";
import { WorkingVisitor } from "../WorkingVisitor";
import { DoneVisitor } from "../DoneVisitor";

const createTodoReturned = Todo.of("dummy").workingOn();
const workingOn = jest.fn(async (_id: TodoId) => createTodoReturned);
const createdVisitor: CreatedVisitor = new CreatedVisitor({ workingOn });
const workingTodoReturned = Todo.of("dummy").complete();
const complete = jest.fn(async (_id: TodoId) => workingTodoReturned);
const workingVisitor: WorkingVisitor = new WorkingVisitor({ complete });

const doneVisitor = new DoneVisitor();

const visitorsMother = {
  visitors: {
    doneVisitor,
    workingVisitor,
    createdVisitor,
  },
  stubs: { createTodoReturned, workingTodoReturned },
  mocks: { workingOn, complete },
};
export default visitorsMother;
