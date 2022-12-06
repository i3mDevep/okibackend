import React, { useState } from "react";
import MarkCreateContainer from "../../containers/marks/mark-create";
import MarkListContainer from "../../containers/marks/marks-list";
import Grid from "@material-ui/core/Grid";

export default function MarksView(props) {
  const [create, setcreate] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12} sm={8}>
        <MarkCreateContainer succesCreate={() => setcreate(!create)} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <MarkListContainer notification_create={create} />
      </Grid>
    </Grid>
  );
}
