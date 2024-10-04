import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart: React.FC = () => {
    // Dummy sales data
    const salesData = {
        'January': 30,
        'February': 20,
        'March': 50,
        'April': 40,
        'May': 60,
        'June': 70,
        'July': 80,
        'August': 90,
        'September': 100,
        'October': 110,
        'November': 120,
        'December': 130,
    };

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