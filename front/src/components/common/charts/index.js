import React from "react";
import { Line } from "react-chartjs-2";

import "./style.css";

export const MyChartLine = ({ dataX = [], dataY = [], color_ = "#1f8ef1", mytitle='chart' }) => {
  const dd = {
    data1: (canvas) => {
      const ctx = canvas.getContext("2d");

      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      var gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke2.addColorStop(0, "#80b6f4");
      gradientStroke2.addColorStop(1, "#f49080");

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: dataY,
        datasets: [
          {
            label: "dato",
            fill: true,
            borderColor: color_,
            backgroundColor: gradientStroke,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: color_,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: color_,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 2.5,
            data: dataX,
          },
        ],
      };
    },
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: mytitle
  },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: true,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: true,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
            // max: max,
            // min: min,
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
  };
  return (
    <div className="card_charts">
      <Line data={dd.data1} options={options} />
    </div>
  );
};
