import React from "react";
import { convertErrorInString } from "../../../utils/error/convertErrorInString";
import ProviderCreateComponent from "../../../components/providers/provider-create";
import { serviceCreateProvider } from "../../../services/providers"
import ReactNotification, {
  quicklyNotification,
} from "../../../components/common/notifications";
import { render } from './render'

export default function ProviderFormCreateContainer({ succesCreate }) {
  const handlerOnSubmit = async (data, resetForm) => {
    try {
      await serviceCreateProvider(data);
      quicklyNotification("proveedor creado exitosamente", "success", "Wonderful!")
      succesCreate()
      resetForm();
    } catch (error) {
      if (error.response) {
        quicklyNotification(convertErrorInString(error), "danger", "Opps!")
      } else {
        quicklyNotification("error desconocido", "danger", "Opps!")
      }
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <ReactNotification />
      <ProviderCreateComponent onSubmit={handlerOnSubmit} fields={render} />
    </div>
  );
}
