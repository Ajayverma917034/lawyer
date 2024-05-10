import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// export const DoughnutChart = ({ data, options = {} }) =>
//     return (
//         ChartJS.register(ArcElement, Tooltip, Legend);
//         <Doughnut data={data} options={options}></Doughnut>;
//     )
// };

ChartJS.register(ArcElement, Tooltip, Legend);
export const DoughnutChart = ({ data, options = {}, title }) => {
  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        padding: 20,
      },
    },
  };
  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = "normal 30px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(title, centerX, centerY);
    },
  };
  return (
    <Doughnut data={data} options={option} plugins={[doughnutLabel]}></Doughnut>
  );
};
