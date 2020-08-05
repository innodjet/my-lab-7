import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Chart from "./components/chart/Chart";
import Form from "./components/form/Form";
import { API_URL } from "./helper";

const App = () => {
  const [data, setData] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [chartData, setChartData] = useState([]);
  const [worldPopulation, setWorldPopulation] = useState("");

  const setInitialData = async (data) => {
    const keys = Object.keys(data[0]);
    keys.splice(0, 2);
    const years = keys
      .join("_")
      .split("_")
      .filter((el) => el !== "Year");
    setYearList(years);
    setData(data);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const year = event.target.value;
    let worldPopulation;
    const chartData = data.map((el) => {
      if (el["Country_Code"] === "WLD") {
        worldPopulation = el[`Year_${year}`];
      }
      return {
        Country: el.Country,
        Country_Code: el.Country_Code,
        [`Year_${year}`]: el[`Year_${year}`],
      };
    });
    setSelectedYear(year);
    setChartData(chartData);
    setWorldPopulation(worldPopulation);
  };

  useEffect(() => {
    const getData = async () => {
      const rep = await axios.get(API_URL);
      const result = await rep.data;
      setInitialData(result);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Form
        selectedYear={selectedYear}
        handleChange={handleChange}
        yearList={yearList}
      />
      {selectedYear && chartData && worldPopulation ? (
        <Chart
          chartData={chartData}
          worldPopulation={worldPopulation}
          selectedYear={selectedYear}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
