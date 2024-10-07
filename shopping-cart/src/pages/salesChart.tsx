import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { getSalesData } from '../services/mocks/salesService';
import { Sales } from '../types/Sales';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart: React.FC = () => {
  //load sales data from service
  const [salesData, setSalesData] = useState<Sales>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSalesData();
      setSalesData(data);
    };

    fetchData();
  }, []);

  const data = {
    labels: Object.keys(salesData),
    datasets: [
      {
        label: '# of Items Sold',
        data: Object.values(salesData),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales Chart',
      },
    },
  };

  return (
    <div className="container">
      <h2>Sales Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
