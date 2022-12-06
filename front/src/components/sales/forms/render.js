import { listFields } from "../../common/templeate-forms/list-fields";
import FormHelperText from '@material-ui/core/FormHelperText';

export const formSearch = [
  {
    grid: { xs: 12 },
    component: listFields["textField"],
    controller: {
      name: "search",
      defaultValue: "",
    },
    field: {
      label: "Factura o Codigo",
      required: false,
      autoComplete: "off",
      fullWidth: true,
    },
    extras: <FormHelperText>Seleccion orden de datos</FormHelperText>
  },
];


