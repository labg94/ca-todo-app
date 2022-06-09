import { Task } from "./Task";

describe("task test", () => {
  describe("when created with a valid value", () => {
    test("the value should be the same as added", () => {
      const valid = "My Valid Task";
      const actual = new Task(valid);
      expect(actual.value).toBe(valid);
    });
  });
  describe("when created with ", () => {
    const errorMessage = "the value needs at least one word";
    test("an empty string should throw an exception", () => {
      const invalid = "";
      expect(() => new Task(invalid)).toThrow(errorMessage);
    });
    test("a blank string should throw an exception", () => {
      const invalid = "      ";
      expect(() => new Task(invalid)).toThrow(errorMessage);
    });
  });
});
