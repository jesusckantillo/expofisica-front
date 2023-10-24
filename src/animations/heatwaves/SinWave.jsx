import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SinWave = ({ frequency }) => {
  const data = [];
  for (let i = 0; i <= 1000; i += 1) {
    const x = i / 100; 
    data.push([x, 10 * Math.sin((x * Math.PI * frequency) / 180)]);
  }

  const options = {
    chart: {
      id: 'sine-wave-chart',
    },
    xaxis: {
      type: 'numeric',
      title: {
        text: 'Time',
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(2);
        },
      },
    },
  };

  return (
    <div className="sine-wave-chart">
      <ReactApexChart options={options} series={[{ name: 'Sine Wave', data }]} type="line" height={350} />
    </div>
  );
};

export default SinWave;
