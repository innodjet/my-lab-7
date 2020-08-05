import React from "react";
import { shallow } from "enzyme";
import Chart from "../chart/Chart";

describe("<Chart />", () => {
  const chartData = [
    {
      Country: "Aruba",
      Country_Code: "ABW",
      Year_1960: 54211,
    },
    {
      Country: "Afghanistan",
      Country_Code: "AFG",
      Year_1960: 8996351,
    },
    {
      Country: "Angola",
      Country_Code: "AGO",
      Year_1960: 5643182,
    },
  ];
  const worldPopulation = 3034193297;
  const selectedYear = 1960;
  it("should render a chart based on mock data", () => {
    const wrapper = shallow(
      <Chart
        chartData={chartData}
        worldPopulation={worldPopulation}
        selectedYear={selectedYear}
      />
    );
    expect(wrapper.find("dl").exists()).toBe(true);
    expect(wrapper.find(".chart__list").length).toEqual(chartData.length);
  });
});
