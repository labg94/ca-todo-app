import {CreatedVisitor} from "./CreatedVisitor";
import {WorkingVisitor} from "./WorkingVisitor";
import {DoneVisitor} from "./DoneVisitor";

const defaultVisitor = new DoneVisitor();
const visitors = {
    all: [new CreatedVisitor(), new WorkingVisitor(), defaultVisitor],
    defaultVisitor
};

export default visitors
