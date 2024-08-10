import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

const LineChart = ({data}) => {
    const chartData = {
        labels: data.map((item) => new Date(item.timestamp).toLocaleDateString()),
        datasets: [
          {
            label: 'Price',
            data: data.map((item) => item.price),
            borderColor: 'wheat',
            fill: true,
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date',
              color:'white',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Price',
              color:'white',
            },
          },
        },
      };
  return (
    <div>
        <p>Price History</p>
        <Line data={chartData} options={options} />
    </div>
  )
}

export default LineChart