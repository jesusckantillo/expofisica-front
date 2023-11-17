import React, {useState, useRef, useEffect} from "react";
import socket from "../../socket";
import Chart from "react-apexcharts";


//Code for a normal plot
const LinePlot = ({xaxis, xname, yname, yaxis, title}) => {
    const chartRef = useRef(null);
    const [series, setSeries] = useState([{
        data: [{x: 0, y: 0}],
    }]);


    const options = {
        chart: {type: "area"},
        xaxis: {
            type: "numeric",
            title: {
                text: xname
            }
        },
        yaxis: {
            type: "numeric",
            title: {
                text: yname
            }
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: title,
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: undefined,
                color: '#263238'
            },
        }
    };

    const MAX_POINTS = 100;

    const updateData = (data) => {
        const parsedData = JSON.parse(data);
        const valX = parsedData.MF[xaxis];
        const valY = parsedData.MF[yaxis];
        setSeries(prevSeries => {
            const newData = {
                x: valX,
                y: valY,
            };
            const updatedSeries = [{...prevSeries[0], data: [...prevSeries[0].data, newData]}];
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
                    <Chart ref={chartRef} options={options} series={series} type="area" width="100%" height="400"/>
                </div>
            </div>
        </div>
    );
};

export default LinePlot;