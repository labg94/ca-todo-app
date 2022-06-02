import Mother from "../test/VisitorsMother";

const { workingVisitor, createdVisitor, doneVisitor } = Mother.visitors;

module.exports = {
  all: [workingVisitor, doneVisitor, createdVisitor],
};
