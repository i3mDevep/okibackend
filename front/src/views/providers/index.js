import React, { useState } from "react";
import ProviderCreateContainer from "../../containers/providers/provider-create";
import ProviderListContainer from "../../containers/providers/providers-list";
import Grid from "@material-ui/core/Grid";

export default function ProvidersView(props) {
  const [create, setcreate] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12} sm={8}>
        <ProviderCreateContainer succesCreate={() => setcreate(!create)} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ProviderListContainer notification_create={create} />
      </Grid>
    </Grid>
  );
}
