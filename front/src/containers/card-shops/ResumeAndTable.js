import { useState, useEffect } from "react";
import { ResumeSale } from "../../components/card-shop/cards";
import CardShopTable from "../../components/card-shop/tables";
import ReactNotification, {
  quicklyNotification,
} from "../../components/common/notifications";
import Grid from "@material-ui/core/Grid";
import { formAddProduct, formConfirmSale } from "./renderForms";
import { convertErrorInString } from "../../utils/error/convertErrorInString";
import FactureDialog from "../card-shops/Facture";

import {
  serviceListCardShops,
  serviceAddProduct,
  serviceRemoveProduct,
} from "../../services/card-shops";
import { serviceConfirmSale } from "../../services/sales";

import { question } from "../../components/common/confirm";

import React from "react";

async function re_render(setstate, setresume) {
  const result = await serviceListCardShops();
  setstate(result.data.products);
  setresume({
    price: result.data.total_sale_price,
    count: result.data.total_sale_products,
  });
}

export function ResumeAndTable() {
  const [list, setlist] = useState([]);
  const [totals, settotals] = useState({});
  const [openFacture, setopenFacture] = useState(false)
  const [sales, setsales] = useState([])

  useEffect(async () => {
    re_render(setlist, settotals);
  }, []);

  const handleOnSubmitAddProduct = async (data, resetForm) => {
    try {
      data["count"] = parseInt(data["count"]);
      data["barcode"] = data["barcode"].trim();
      await serviceAddProduct(data);
      quicklyNotification(
        "producto agregado exitosamente",
        "success",
        "Wonderful!"
      );
      resetForm();
      re_render(setlist, settotals);
    } catch (error) {
      if (error.response) {
        quicklyNotification(convertErrorInString(error), "danger", "Opps!");
      } else {
        quicklyNotification("error desconocido", "danger", "Opps!");
      }
    }
  };

  const handleDelete = (oldData) => {
    return new Promise((resolve, reject) => {
      serviceRemoveProduct(oldData.id)
        .then(() => {
          re_render(setlist, settotals);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const handleOnSubmitConfirmSale = async (payment) => {
    question(
      {
        title: "Confirmación",
        message: "¿Deseas realizar esta venta?",
      },
      async () => {
        let body_serializer = {
          total_price_sale: 0,
          total_product_sale: 0,
          total_util_sale: 0,
        };
        Object.assign(body_serializer, payment);
        try {
          let res = await serviceConfirmSale(body_serializer);
          setsales(res.data)
          setopenFacture(true)
          re_render(setlist, settotals);
        } catch (error) {
          console.error(error.message);
        }
      }
    );
  };

  return (
    <Grid container spacing={2}>
      <ReactNotification />
      <FactureDialog sales={sales} open={openFacture} onClose={() => setopenFacture(false)} />
      <Grid item xs={12} sm={8}>
        <CardShopTable data={list} deleteAction={handleDelete} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ResumeSale
          formPayment={{
            button: "Confirmar Venta",
            fields: formConfirmSale,
            defaultReset: { type_payment: "" },
            onSubmit: handleOnSubmitConfirmSale,
          }}
          formAddCardShop={{
            fields: formAddProduct,
            defaultReset: { barcode: "", count: 0 },
            onSubmit: handleOnSubmitAddProduct,
          }}
          products={list}
          {...totals}
        />
      </Grid>
    </Grid>
  );
}
