import React from "react";
import { convertErrorInString } from "../../../utils/error/convertErrorInString";
import MarkCreateComponent from "../../../components/marks/marks-create";
import { serviceCreateMark } from "../../../services/marks"
import ReactNotification, {
  quicklyNotification,
} from "../../../components/common/notifications";
import { render } from './render'

export default function MarkFormCreateContainer({ succesCreate }) {
  const handlerOnSubmit = async (data, resetForm) => {
    try {
      await serviceCreateMark(data);
      quicklyNotification("marca creada exitosamente", "success", "Wonderful!")
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
      <MarkCreateComponent onSubmit={handlerOnSubmit} fields={render} />
    </div>
  );
}
