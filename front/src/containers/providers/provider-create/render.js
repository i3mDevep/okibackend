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
      label: "Nombre del proveedor",
      fullWidth: true,
    },
  },
  {
    grid: { xs: 12, sm: 12 },
    component: listFields["textField"],
    controller: {
      name: "email",
      defaultValue: "",
    },
    field: {
      label: "Email",
      fullWidth: true,
      type: "email"
    },
  },
  {
    grid: { xs: 12, sm: 6 },
    component: listFields["textField"],
    controller: {
      name: "phone",
      defaultValue: "",
    },
    field: {
      label: "Numero de contacto",
      fullWidth: true,
      type: "phone"
    },
  },
  {
    grid: { xs: 12, sm: 6 },
    component: listFields["textField"],
    controller: {
      name: "web",
      defaultValue: "",
    },
    field: {
      label: "Pagina Web",
      fullWidth: true,
    },
  },
];