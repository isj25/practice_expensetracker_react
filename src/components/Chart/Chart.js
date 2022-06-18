import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {

    const dataPointValues = props.dataItem.map(data => {
        return data.value
    });

    const maxVal = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataItem.map((data) => {
        return <ChartBar key={data.label} value={data.value} maxVal={maxVal} label={data.label} />;
      })}
    </div>
  );
}

export default Chart;
