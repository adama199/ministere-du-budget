import React from 'react'
import Chart from "react-apexcharts";

function BarChartDash() {
    const series = [
        {
          name: "DJF",
          data: [30000, 25000, 40000, 35000, 37000, 45000, 43000, 40000, 35000, 37000]
        },
      ];
    
      const options: any = {
        chart: {
          height: 280,
          type: "bar",
          zoom: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#6741FF"],
        fill: {
          type: "solid",
          colors: ["#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0", "#0dcaf0"],
        },
        plotOptions: {
            bar: {
              borderRadius: 10,
              distributed: true
            }
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
        xaxis: {
          categories: [
            "ACP- Acte chez un notaire",
            "ACP-Acte civil et public",
            "ACP-Contrat de vente",
            "ACP-Passation de marché",
            "AJ-Jugement",
            "AJ-Jugement n133/23",
            "LV-CA-Cession amiable",
            "SSP-Contrat de bail d'habitation",
            "SSP-Convention de pret",
            "SSP-Proces verbal"
          ],
          labels: {
            rotate: 50,
            style: {
              colors: "#A6A6A6",
              cssClass: "string",
                fontFamily: "Inter",
                fontSize: "8px",
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
    
    //   const onChange = (start: any) => {
    //     setDate(start);
    //   };
    
    
    
      return (
        <div className="chart-item-container">
          {/* {!!isLoading && <Skeleton width={`100%`} height={350} />} */}
          
            <Chart
              className="chart-dashboard-marketplace"
              options={options}
              series={series || []}
              data="Dons"
              type="bar"
              width="100%"
              height="350"
            />
          
        </div>
      );
}

export default BarChartDash