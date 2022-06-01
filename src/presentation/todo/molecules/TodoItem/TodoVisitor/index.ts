import {CreatedVisitor} from "./CreatedVisitor";
import {WorkingVisitor} from "./WorkingVisitor";
import {DoneVisitor} from "./DoneVisitor";
import {workingOnTodo} from "../../../../../app/todo/workingOn";
import {completeTodo} from "../../../../../app/todo/complete";

const createdVisitor = new CreatedVisitor(workingOnTodo)
const workingVisitor = new WorkingVisitor(completeTodo);
const doneVisitor = new DoneVisitor();

const defaultVisitor = new CreatedVisitor(workingOnTodo);

const visitors = {
    all: [createdVisitor, workingVisitor, doneVisitor],
    defaultVisitor
};

export default visitors
