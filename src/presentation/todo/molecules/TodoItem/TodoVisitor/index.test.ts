import Visitors from "./";
import { CreatedVisitor } from "./CreatedVisitor";
import { WorkingVisitor } from "./WorkingVisitor";
import { DoneVisitor } from "./DoneVisitor";

describe("Todo Visitor index test", () => {
  describe("all", () => {
    const allVisitors = [DoneVisitor, WorkingVisitor, CreatedVisitor];

    test(`should have ${allVisitors.length} visitors`, () => {
      expect(Visitors.all).toHaveLength(allVisitors.length);
    });

    test.each(allVisitors)("should have an instance of %s", (clazz) => {
      expect(Visitors.all.find((value) => value instanceof clazz)).toBeTruthy();
    });
  });
});
