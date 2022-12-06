import React from "react";
import SaleReportToday from "../../containers/sales/SaleReportToday";
import {
  SaleReportPrice,
  SaleReportUtils,
} from "../../containers/sales/SaleReportWeek";
import Grid from "@material-ui/core/Grid";

import Metabase from "../../components/metabase"

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <SaleReportToday />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
            <SaleReportPrice />
          </Grid>
          <Grid item xs={12}>
            <SaleReportUtils />
          </Grid>
          <Grid item xs={12}>
            <Metabase />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
