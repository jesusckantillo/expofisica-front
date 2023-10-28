import React, { useEffect, useState, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';

const SinWave = ({ frequency }) => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = [];
      for (let i = 0; i <= 500; i += 1) {
        const x = i / 100;
        newData.push([x, 10 * Math.sin((x * Math.PI * frequency) / 180)]);
      }
      setData(newData);
    }, 1000); // Actualizar los datos cada segundo

    return () => clearInterval(intervalId);
  }, [frequency]); // Actualizar los datos cada vez que cambie la frecuencia

  const options = {
    chart: {
      id: 'sine-wave-chart',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
    }
    },
    xaxis: {
      type: 'numeric',
      title: {
        text: 'Tiempo (s)',
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
      <ReactApexChart
        options={options}
        series={[{ name: 'Sine Wave', data }]}
        type="line"
        height={350}
        onMount={(chart) => {
          chartRef.current = chart;
        }}
      />
    </div>
  );
};

export default SinWave;

