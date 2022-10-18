import React from 'react';
import ChartBar from './ChartBar';
import "./chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(props.dataPoints)
  return (
    <div className="chart">
      {props.dataPoints.map(datapoint => (
      <ChartBar 
        value={datapoint.value} 
        maxValue={totalMaximum} 
        label={datapoint.label} 
        key={datapoint.label}
        />
        ))}    
    </div>
  )
}

export default Chart