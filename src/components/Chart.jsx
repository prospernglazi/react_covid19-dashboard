import React, { useState, useEffect } from 'react';
import { fetchHistoricalData } from '../api/userApi';
import { Line, Bar } from 'react-chartjs-2';

export default function Chart({ country, cases, recovered, deaths }) {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    (async function getHistoricalData() {
      try {
        const historicalData = await fetchHistoricalData(country);
        setDailyData(historicalData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [country]);

  const lineChart = Object.keys(dailyData).length ? (
    <Line
      data={{
        labels: Object.keys(dailyData.cases).map((date) => date),
        datasets: [
          {
            data: Object.values(dailyData.cases).map((cases) => cases),
            label: 'Cases',
            borderColor: '#2196f3',
            fill: true,
          },
          {
            data: Object.values(dailyData.recovered).map(
              (recovered) => recovered,
            ),
            label: 'Recovered',
            borderColor: '#4caf50',
            fill: true,
          },
          {
            data: Object.values(dailyData.deaths).map((deaths) => deaths),
            label: 'Deaths',
            borderColor: '#f44336',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = Object.keys(dailyData).length ? (
    <Bar
      data={{
        labels: Object.keys(dailyData),
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#2196f3', '#4caf50', '#f44336'],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div>
      <h1>Graphical Data</h1>
      <div>{country ? barChart : lineChart}</div>
    </div>
  );
}
