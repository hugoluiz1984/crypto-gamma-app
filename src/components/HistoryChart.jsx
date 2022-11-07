import React from 'react'
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {

  const {Id} = useParams();
  //console.log(Id)

  const {response} = useAxios(`coins/${Id}/market_chart?vs_currency=usd&days=7`);
    //console.log(response);

  if(!response){
    return <div>Loading...</div>;
  }

  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

  //console.log(coinChartData);

  const options = {
    responsive: true,
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: Id,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
   }

  return (
    <div>
        <Line options={options} data={data}/>

    </div>
  )
}

export default HistoryChart