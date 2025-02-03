import { color } from "chart.js/helpers";
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Analytics</h2>
      <Bar
        data={chartData}
        options={{
            plugins: {
            title: {
                display: true,
                text: "Link clicks popularity by Country",
                color: "#fefae0",
            },
            legend: {
                display: false
            },
            backgroundColor: {
                color: "#FFF",
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;