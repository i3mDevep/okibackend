import { listFields } from "../../components/common/templeate-forms/list-fields";
import payment from '../../const/payment'

export const formAddProduct = [
  {
    grid: { xs: 12, sm: 8 },
    component: listFields["textField"],
    controller: {
      name: "barcode",
      defaultValue: "",
    },
    field: {
      label: "Codigo de barras",
      fullWidth: true,
      required: true,
      variant: "outlined",
      autoComplete: "off",
    },
  },
  {
    grid: { xs: 12, sm: 4 },
    component: listFields["textField"],
    controller: {
      name: "count",
      defaultValue: "",
      rules: {
        required: "Required",
        min: 1,
      },
    },
    field: {
      required: true,
      label: "Cantidad",
      fullWidth: true,
      type: "number",
      variant: "outlined",
      InputLabelProps: {
        shrink: true,
      },
    },
  },
];

export const formConfirmSale = [
  {
    grid: { xs: 12 },
    component: listFields["selectField"],
    controller: {
      defaultValue: "",
      name: "type_payment",
      rules: {
        required: "Required",
      },
    },
    field: {
      select: true,
      label: "Tipo de Pago",
      fullWidth: true,
      SelectProps: {
        native: true,
      },
      helperText: "Por favor selecciona un metodo de pago",
      options: payment,
    },
  },
];
