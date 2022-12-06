import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
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

export default function SelectTypePayment({ selecteOnChange, select }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="type_payment"
        id="type_payment"
        value={select}
        onChange={selecteOnChange}
      >
        <MenuItem value="all">Todo</MenuItem>
        <MenuItem value={0}>Tarjeta</MenuItem>
        <MenuItem value={1}>Efectivo</MenuItem>
        <MenuItem value={2}>Bono</MenuItem>
        <MenuItem value={3}>Otro</MenuItem>
      </Select>
      <FormHelperText>Filtro metodo de pago</FormHelperText>
    </FormControl>
  );
}
