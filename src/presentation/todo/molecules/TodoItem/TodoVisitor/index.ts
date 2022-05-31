import {CreatedVisitor} from "./CreatedVisitor";
import {WorkingVisitor} from "./WorkingVisitor";
import {DoneVisitor} from "./DoneVisitor";
import {workingOnTodo} from "../../../../../app/todo/workingOn";
import {completeTodo} from "../../../../../app/todo/complete";

const defaultVisitor = new DoneVisitor();
const visitors = {
    all: [new CreatedVisitor(workingOnTodo), new WorkingVisitor(completeTodo), defaultVisitor],
    defaultVisitor
};

export default visitors
