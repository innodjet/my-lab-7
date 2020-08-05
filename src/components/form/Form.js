import React from "react";
import "./Form.scss";

const Form = ({ selectedYear, handleChange, yearList }) => {
  return (
    <div className="container">
      <div className="form-group">
        <select
          className="form-control"
          value={selectedYear}
          onChange={handleChange}
          id="year"
        >
          <option value={"Please select a year"}>Please select a year</option>;
          {yearList.map((el) => {
            return (
              <option className="list__option" value={el} key={el}>
                {" "}
                {el}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Form;
