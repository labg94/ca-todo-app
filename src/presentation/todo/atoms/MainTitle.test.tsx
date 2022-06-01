import {shallow} from "enzyme";
import {MainTitle} from "./MainTitle";
import {findByTestAttr} from "../../../../test/testUtils";

describe("MainTitle tests", () => {

    describe("when rendered", () => {

        const dummyText = "Dummy text";
        const wrapper = shallow(<MainTitle>{dummyText}</MainTitle>);
        const titleTag = findByTestAttr(wrapper, "main-title");

        test("the title should be rendered", () => expect(titleTag.exists()).toBeTruthy());

        test("the title should be the same as the props", () => expect(titleTag.text()).toBe(dummyText))


    })


})
