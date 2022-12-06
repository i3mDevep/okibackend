import React, { useEffect, useState } from "react";
import { serviceReportSaleWeek } from "../../services/sales";
import { MyChartLine } from "../../components/common/charts";
import moment from "moment";

export function SaleReportPrice() {
  const [sales, setsales] = useState([]);
  useEffect(async () => {
    let res = await serviceReportSaleWeek();
    setsales(res.data.results);
  }, []);
  const data = React.useMemo(() => {
    let priceSales = [];
    let dateSales = [];
    sales.forEach((psale) => {
      priceSales.push(parseFloat(psale.total_price_sale));
      dateSales.push(moment(psale.day).format("MMMM d, YYYY"));
    });
    return [dateSales, priceSales];
  }, [sales]);
  return <MyChartLine mytitle="VENTAS" dataY={data[0]} dataX={data[1]} />;
}

export function SaleReportUtils() {
  const [sales, setsales] = useState([]);
  useEffect(async () => {
    let res = await serviceReportSaleWeek();
    setsales(res.data.results);
  }, []);
  const data = React.useMemo(() => {
    let utilSales = [];
    let dateSales = [];
    sales.forEach((psale) => {
      utilSales.push(parseFloat(psale.total_utils_sale));
      dateSales.push(moment(psale.day).format("MMMM d, YYYY"));
    });
    return [dateSales, utilSales];
  }, [sales]);
  return <MyChartLine mytitle="UTILIDADES" dataY={data[0]} dataX={data[1]} />;
}

// function App() {
//   const series = React.useMemo(
//     () => ({
//       type: "area",
//     }),
//     []
//   );
//   const axes = React.useMemo(
//     () => [
//       { primary: true, position: "bottom", type: "time" },
//       { position: "left", type: "linear", stacked: true },
//     ],
//     []
//   );
//   const data = React.useMemo(
//     () => [
//       {
//         label: "Series 1",
//         datums: [
//           {
//             x: new Date("2020-03-18T11:00:00.000Z"),
//             y: 60,
//           },
//           {
//             x: new Date("2020-03-18T11:30:00.000Z"),
//             y: 23,
//           },
//           {
//             x: new Date("2020-03-18T12:00:00.000Z"),
//             y: 65,
//           },
//           {
//             x: new Date("2020-03-18T12:30:00.000Z"),
//             y: 84,
//           },
//           {
//             x: new Date("2020-03-18T13:00:00.000Z"),
//             y: 87,
//           },
//           {
//             x: new Date("2020-03-18T13:30:00.000Z"),
//             y: 84,
//           },
//           {
//             x: new Date("2020-03-18T14:00:00.000Z"),
//             y: 96,
//           },
//           {
//             x: new Date("2020-03-18T14:30:00.000Z"),
//             y: 88,
//           },
//           {
//             x: new Date("2020-03-18T15:00:00.000Z"),
//             y: 63,
//           },
//           {
//             x: new Date("2020-03-18T15:30:00.000Z"),
//             y: 60,
//           },
//         ],
//       },
//       {
//         label: "Series 2",
//         datums: [
//           {
//             x: new Date("2020-03-18T11:00:00.000Z"),
//             y: 41,
//           },
//           {
//             x: new Date("2020-03-18T11:30:00.000Z"),
//             y: 15,
//           },
//           {
//             x: new Date("2020-03-18T12:00:00.000Z"),
//             y: 95,
//           },
//           {
//             x: new Date("2020-03-18T12:30:00.000Z"),
//             y: 96,
//           },
//           {
//             x: new Date("2020-03-18T13:00:00.000Z"),
//             y: 33,
//           },
//           {
//             x: new Date("2020-03-18T13:30:00.000Z"),
//             y: 96,
//           },
//           {
//             x: new Date("2020-03-18T14:00:00.000Z"),
//             y: 32,
//           },
//           {
//             x: new Date("2020-03-18T14:30:00.000Z"),
//             y: 49,
//           },
//           {
//             x: new Date("2020-03-18T15:00:00.000Z"),
//             y: 18,
//           },
//           {
//             x: new Date("2020-03-18T15:30:00.000Z"),
//             y: 69,
//           },
//         ],
//       },
//     ],
//     []
//   );
//   return (
//     <div className="App">
//       <div style={{ width: "500px", height: "500px" }}>
//         <Chart data={data} series={series} axes={axes} tooltip />
//       </div>
//     </div>
//   );
// }
