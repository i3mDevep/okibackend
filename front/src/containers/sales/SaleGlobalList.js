import React, { useEffect, useState } from "react";
import { SaleGlobalTable } from "../../components/sales/tables";
import { serviceSales, serviceSaleDetail } from "../../services/sales";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation, useHistory } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function filterOrSearch(history, query, tag, value) {
  if (value === "all") {
    query.delete("type_payment");
  } else {
    query.set("page", 1);
    query.set(tag, value);
  }
  history.push({
    pathname: "/app/sales/",
    search: query.toString(),
  });
}


export default function SaleGlobalList() {
  const [salesGlobal, setsalesGlobal] = useState([]);
  const [quantityData, setquantityData] = useState();
  const [detail, setdetail] = useState([]);

  const { search } = useLocation();

  let history = useHistory();

  let query = useQuery();

  useEffect(async () => {
    let response = await serviceSales(search);
    setquantityData(Math.ceil(parseInt(response.data.count) / 10));
    setsalesGlobal(response.data.results);
  }, [search]);

  const handlePaginationChange = (event, value) => {
    query.set("page", value);
    history.push({
      pathname: "/app/sales/",
      search: query.toString(),
    });
  };

  const handleDetailSale = async (id) => {
    let response = await serviceSaleDetail(id);
    setdetail(response.data.products);
  };

  const handleSelectOrder = (event) => {
    filterOrSearch(history, query, "order", event.target.value)
  };

  const handleSelectFilter = (event) => {
    filterOrSearch(history, query, "type_payment", event.target.value)
  };

  const handleSearch = ({ search }) => {
    filterOrSearch(history, query, "search", search)
  }

  return (
    <SaleGlobalTable
      onClickFetch={handleDetailSale}
      globalSale={salesGlobal}
      sale_detail={detail}
      filter={{
        selecteOnChange: handleSelectFilter,
        select: query.get("type_payment") || "all",
      }}
      order={{
        selecteOnChange: handleSelectOrder,
        select: query.get("order") || "date",
      }}
      search={{
        onSubmit : handleSearch
      }}
      pagination={
        <Pagination
          style={{ margin: "auto 0", minWidth: '350px' }}
          page={parseInt(query.get("page")) || 1}
          onChange={handlePaginationChange}
          count={quantityData}
          color="secondary"
        />
      }
    />
  );
}
