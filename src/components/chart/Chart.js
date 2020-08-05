import React from "react";
import "./Chart.scss";

const Chart = ({ chartData, worldPopulation, selectedYear }) => {
  const chartDisplay = () => {
    return chartData.map((el) => {
      const { Country_Code } = el;
      const population = el[`Year_${selectedYear}`];
      const percentage = Math.round((population / worldPopulation) * 100);
      return (
        <div className="chart__list" key={Country_Code}>
          <dd className={`percentage percentage-${percentage}`}>
            <span className="text">{`${Country_Code}`}</span>
          </dd>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <p className="graph-title">
        Countries population percentage in {selectedYear} based on the world
        (WLD) population
      </p>
      <dl>{chartDisplay()}</dl>
    </div>
  );
};

export default Chart;
