import { shallow } from "enzyme";
import { Button } from "./Button";
import { findByTestAttr } from "../../../../test/testUtils";

describe("Button Test", () => {
  describe("when the button is rendered", () => {
    const text = "Dummy text";
    const onClick = jest.fn();

    const wrapper = shallow(<Button onClick={onClick}>{text}</Button>);
    const buttonTag = findByTestAttr(wrapper, "button");

    test("the text should be the same as the props", () => {
      expect(buttonTag.text()).toBe(text);
    });

    test("the onClick should be the same as the props", () => {
      buttonTag.simulate("click");
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
