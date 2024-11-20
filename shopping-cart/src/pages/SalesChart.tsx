import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalesData } from '../redux/thunks/salesThunks';
import { AppDispatch, RootState } from '../redux/store';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const salesData = useSelector((state: RootState) => state.sales.salesData);

  useEffect(() => {
    dispatch(fetchSalesData());
  }, [dispatch]);

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
