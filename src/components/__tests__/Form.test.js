import React from "react";
import { shallow } from "enzyme";
import Form from "../form/Form";

describe("<Form />", () => {
  const yearList = [1990, 1991, 1992, 1993];
  let selectedYear = "";
  it("should render a dropdown with a list of years data passed in as a prop", () => {
    const wrapper = shallow(
      <Form
        selectedYear={selectedYear}
        handleChange={() => {}}
        yearList={yearList}
      />
    );
    expect(wrapper.find("select").exists()).toBe(true);
    expect(wrapper.find(".list__option").length).toEqual(yearList.length);
  });
});
