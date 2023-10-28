import React, { useState, useRef, useEffect } from "react";
import socket from "../../socket";
import Chart from "react-apexcharts";


//Code for a normal plot
const LinePlot = () => {
  const chartRef = useRef(null);
  const [series, setSeries] = useState([{
    data: [{ x: 0, y: 0 }	],
  }]);
  

  const options = {
    chart: { type: "area" },
    xaxis: {
       type: "numeric",
       title: {
        text: "Tiempo (s)"
      }
   },
    yaxis: {
      title: {
        text: "Distancia (cm)"
      }
    },
    markers: {
      size: 0,
      style: 'hollow',
    }, 
    dataLabels: {
      enabled: false // <--- HERE
    }
  };

  const MAX_POINTS = 100;




  

/** 
  const updateData = (distance) => {
    setTimeCounter(prevTimeCounter => prevTimeCounter + 1);
    setSeries(prevSeries => [{ ...prevSeries[0], data: [...prevSeries[0].data, { x: timeCounter, y: distance }] }]);
    
 }; 
 */
 /** 
  const updateData = (data) => {
    const { time, distance } = data.ULTRASONIC;
    setSeries(prevSeries => [{ ...prevSeries[0], data: [...prevSeries[0].data, { x: distance, y: time }] }]);
  };
  
  const updateData = (distance) => {
    setSeries(prevSeries => {
      const newData = { 
        x: prevSeries[0].data.length + 1, 
        y: distance,
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#00f2c3'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        }
      };
      const updatedSeries = [{ ...prevSeries[0], data: [...prevSeries[0].data, newData] }];
      if (updatedSeries[0].data.length > MAX_POINTS) {
        updatedSeries[0].data.shift(); 
      }
      return updatedSeries;
    });
  };
  */
  const updateData = (data) => {
    const parsedData = JSON.parse(data);
    console.log(data)
    const { time, distance} =  parsedData.MRUA;
    setSeries(prevSeries => {
      const newData = { 
        x: time, 
        y: distance,
      };
      const updatedSeries = [{ ...prevSeries[0], data: [...prevSeries[0].data, newData] }];
      if (updatedSeries[0].data.length > MAX_POINTS) {
        updatedSeries[0].data.shift(); 
      }
      return updatedSeries;
    });
  };
  
  
 
  
  useEffect(() => {
    const handleExpData = (data) => {
      updateData(data);
    };

    socket.on('expData', handleExpData);

    return () => {
      socket.off('expData', handleExpData);
    };
  }, [socket]); 

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart ref={chartRef} options={options} series={series} type="area" width="100%" height="400" />
        </div>
      </div>
    </div>
  );
};

export default LinePlot;