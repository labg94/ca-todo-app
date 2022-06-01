import { shallow } from "enzyme";
import { Loader } from "./Loader";
import { findByTestAttr } from "../../../../test/testUtils";

describe("Loader test", () => {
  describe("when rendered", () => {
    const wrapper = shallow(<Loader />);

    const loaderTag = findByTestAttr(wrapper, "loader");

    test("The loader should be displayed", () => {
      expect(loaderTag.exists()).toBeTruthy();
    });

    test("the text of the loader should be", () => {
      expect(loaderTag.text()).toBe("Loading todos...");
    });
  });
});
