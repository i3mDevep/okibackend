import React from "react";
import { serviceCreateProduct } from "../../../services/products";
import { parseFormatMoney } from "../../../utils/formatMoney";
import { convertErrorInString } from "../../../utils/error/convertErrorInString"
import ProductCreateComponent from "../../../components/products/product-create";
import ReactNotification, {
  quicklyNotification
} from "../../../components/common/notifications";
import { render } from './render'

export default function ProductFormCreateContainer() {

  const handlerOnSubmit = async (data, resetForm) => {
    data["num_sale"] = 0;
    data["price"] = parseFormatMoney(data, "price");
    data["cost"] = parseFormatMoney(data, "cost");
    try {
      await serviceCreateProduct(data);
      quicklyNotification("producto creado exitosamente", "success", "Wonderful!")
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
    <div>
      <ReactNotification />
      <ProductCreateComponent
        onSubmit={handlerOnSubmit}
        fields={render}
      />
    </div>
  );
}
