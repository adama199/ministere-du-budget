import React from "react";
import Chart from "react-apexcharts";

function LineChartEncaissements() {

  const series = [
    {
      name: "Nombres d'actes",
      data: [50000, 35000, 10000, 29800],
      colors: ["#fd7e14"],
    fill: {
      type: "solid",
      colors: ["#fd7e144a"],
    },
    },
    {
      name: "Total",
      data: [3000, 250, 4000, 380],
      colors: ["#0dcaf0"],
    fill: {
      type: "solid",
      colors: ["#0dcaf038"],
    },
    },
  ];

  const options: any = {
    chart: {
      height: 280,
      type: "area",
      zoom: false,
    },
    dataLabels: {
      enabled: false,
    },
    
    xaxis: {
      categories: [
        "ACP",
        "AJ",
        "LV-CA",
        "SSP"
      ],
      labels: {
        rotate: 15,
        style: {
          colors: "#A6A6A6",
          cssClass: "string",
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "19.2px",
            textAlign: "left",

        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A6A6A6",
          cssClass: "string",
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "19.2px",
            textAlign: "left",
        },
      },
    },
  };

  return (
    <div className="chart-item-container">
        <Chart
          className="chart-dashboard-marketplace"
          options={options}
          series={series || []}
          data="Dons"
          type="area"
          width="100%"
          height="350"
        />
      
    </div>
  );
}

export default LineChartEncaissements;
