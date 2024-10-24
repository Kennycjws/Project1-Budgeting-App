// ./components/BarChart.js

// Import the React library.
import React from "react";

// Import the Chart.js library.
import Chart from "chart.js/auto";

// Import the Bar component from the react-chartjs-2 library.
import { Bar } from "react-chartjs-2";

/**
 * Define a functional component named BarChart
 */
const BarChart = () => {
  // Define an array of labels.
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August" ,"september", "October", "November", "December"];

  // Defined an object 
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expenses",
        backgroundColor: "rgb(255,92,78,255)",
        borderColor: "rgb(255,92,78,255)",
        data: [300, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  // Return the Bar component, passing in the data object as a prop.
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

// Export the BarChart component as the default export of the module.
export default BarChart;