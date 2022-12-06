import { listFields } from "../../../components/common/templeate-forms/list-fields";

export const render = [
  {
    grid: { xs: 12, sm: 12 },
    component: listFields["textField"],
    controller: {
      name: "name",
      defaultValue: "",
      rules: {
        required: "Required",
      },
    },
    field: {
      required: true,
      label: "Nombre de la marca",
      variant: "outlined",
      fullWidth: true,
    },
  },
];
