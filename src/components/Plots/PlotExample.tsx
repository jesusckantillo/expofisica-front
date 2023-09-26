import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const plotOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const timeData = ['0s', '1s', '2s', '3s', '4s', '5s', '6s']; // Cambia las etiquetas a tiempo en segundos

export const plotData = {
  labels: timeData, // Usa las etiquetas de tiempo en lugar de meses
  datasets: [
    {
      label: 'Posición vs Tiempo', // Cambia el nombre del conjunto de datos
      data: timeData.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
