import React, { useState, useRef, useEffect } from "react";
import socket from "socket";
import Chart from "react-apexcharts";


const LinePlot = ({xaxis,xname,yname, yaxis}) => {
  const chartRef = useRef(null);
  const [series, setSeries] = useState([{
    data: [{ x: 0, y: 0, goals : [
            {
                name: 'Valor esperado',
                value: 9.78,
                strokeColor: 'purple'
            }
         ]
    },
],
  }]);
  

  const options = {
    chart: {
      type: 'bar'
    },
    series: [{
      data: [{
        x: 'category A',
        y: 10
      }, {
        x: 'category B',
        y: 18
      }, {
        x: 'category C',
        y: 13
      }]
    }],
    plotOptions: {
        bar:{
            distributed: true,
            barWidth: 20
        }
    }
  }

  const MAX_POINTS = 100;

  const updateData = (data) => {
    const parsedData = JSON.parse(data);
    //const valX = parsedData.FF[xaxis];
   // const valY = parsedData.MRUA[yaxis];
   const {attempt, acceleration, error} = parsedData.FF;
    console.log(data)
    setSeries(prevSeries => {
      const newData = { 
        x: attempt, 
        y: acceleration,
        goals : [
          {
              name: 'Valor esperado',
              value: 9.78,
              strokeColor: 'purple'
          }
        ]
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
          <Chart ref={chartRef} options={options} series={series} type="bar" width="100%" height="400" />
        </div>
      </div>
    </div>
  );
};

export default LinePlot;