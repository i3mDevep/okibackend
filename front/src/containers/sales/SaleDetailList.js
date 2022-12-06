import React, { useEffect, useState } from "react";
import { SaleDetail } from "../../components/sales/tables/SaleDetail";
import { serviceSaleDetail } from "../../services/sales";

export default function SaleDetailList({ id }) {
  const [detail, setdetail] = useState([]);
  useEffect(async () => {
    let response = await serviceSaleDetail(id);
    setdetail(response.data.products);
  }, []);
  return <SaleDetail sale_detail={detail} />;
}
