import React, { useEffect, useState } from "react";
import CardReport from "../../components/sales/cards/report";
import Grid from "@material-ui/core/Grid";
import { serviceReportSaleToday } from "../../services/sales";
import { currencyFormat } from "../../utils/formatCOP";

const cards = [
  {
    title: "Ventas($)",
    tag: "total_price_sale",
    formatter: currencyFormat,
  },
  {
    title: "Ventas(Cantidad)",
    tag: "num_sales",
  },
  {
    title: "Utilidades",
    tag: "total_utils_sale",
    formatter: currencyFormat,
  },
  {
    title: "Cantidad de productos",
    tag: "num_products_sales",
  },
];

export default function SaleReportToday() {
  const [reportSale, setreportSale] = useState([]);
  useEffect(async () => {
    let res = await serviceReportSaleToday();
    setreportSale(res.data);
  }, []);
  return (
    <div>
      <Grid container>
        {cards.map((card) => (
          <Grid item xs={12} key={card.tag}>
            <CardReport data={reportSale} {...card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
