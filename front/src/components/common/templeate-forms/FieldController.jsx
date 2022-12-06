import React from "react";
import Grid from "@material-ui/core/Grid";
import { Controller } from "react-hook-form";

export const FieldController = ({
  component,
  field,
  controller,
  grid,
  children,
  style,
  extras
}) => {
  let ComponentField = component;
  return (
    <Grid item {...grid} style={style} >
      {children}
      <Controller {...controller} as={<ComponentField {...field} />} />
      { extras }
    </Grid>
  );
};
