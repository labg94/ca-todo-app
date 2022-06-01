import {shallow} from "enzyme";
import {TextInput} from "./TextInput";
import {findByTestAttr} from "../../../../test/testUtils";


describe("TextInput test", () => {


    describe("when rendered", () => {

        const onChange = jest.fn()
        const value = "Dummy value"
        const wrapper = shallow(<TextInput value={value} onChange={onChange}/>);
        const inputTag = findByTestAttr(wrapper, "text-input");


        test("the input should be displayed", () => {
            expect(inputTag.exists()).toBeTruthy()
        });

        test("the input value should be the same as the props", () => {
            expect(inputTag.prop("value")).toBe(value)
        });


        test("the input type should be text", () => {
            expect(inputTag.prop("type")).toBe("text")
        });

        describe("when changed the onChange of props should be called", () => {
            const newValue = 'Hello';

            beforeEach(() => {
                jest.clearAllMocks()
                inputTag.simulate('change', {target: {value: newValue}})

            })

            test("only once", () => {
                expect(onChange).toHaveBeenCalledTimes(1)
            });

            test("with the new input", () => {
                expect(onChange).toHaveBeenCalledWith(newValue)
            });

        })


    })


})
