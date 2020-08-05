import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Form from "./components/form/Form";

describe("<App />", () => {
  it("should render App with 'form' component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form).exists()).toBe(true);
  });
});
