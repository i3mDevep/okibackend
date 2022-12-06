import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectOrdered({ selecteOnChange, select }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={select}
        onChange={selecteOnChange}
      >
        <MenuItem value="date">Fecha de venta</MenuItem>
        <MenuItem value="quantity">Cantidad vendida</MenuItem>
        <MenuItem value="price">Precio de venta</MenuItem>
      </Select>
      <FormHelperText>Seleccion orden de datos</FormHelperText>
    </FormControl>
  );
}
