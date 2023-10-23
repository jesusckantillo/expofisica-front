import React, { useState, useRef, useEffect } from "react";
import socket from "../socket";
import Chart from "react-apexcharts";


//Code for a normal plot
const LinePlot = () => {
  const chartRef = useRef(null);
  const [series, setSeries] = useState([{
    data: [{ x: 1, y: 2 }, { x: 3, y: 4 }],
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
        stops: [0, 80, 100]
      }
    }
  }]);
  

  const options = {
    chart: { type: "area" },
    xaxis: { type: "numeric" },
    yaxis: {
      title: {
        text: "Temperatura (C)"
      }
    },
    colors:['#4E03FC'],
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.5
    },
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
    const { time, distance } =  parsedData.MRUA;
    setSeries(prevSeries => {
      const newData = { 
        x: time, 
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
            stops: [0, 80, 100]
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