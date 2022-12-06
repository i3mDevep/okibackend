import React from "react";

import { imgProductAvatarTable } from "../../common/urls";
import { HeaderTable, Table } from "../../common/templeate-table";

function CardShopTable({ data, deleteAction }) {

  return (
    <Table
      title={
        <HeaderTable url={imgProductAvatarTable} title="Carrito de Compras" />
      }
      columns={[
        { title: "Producto", field: "product.name" },
        { title: "Codigo", field: "product.barcode" },
        { title: "Cantidad", field: "count" },
        { title: "Stock", field: "product.count" },
        { title: "Precio", field: "product.price" },
      ]}
      data={data}
      editable={{
        onRowDelete: deleteAction
      }}
      options={{
        pageSize: 10,
        actionsColumnIndex: -1,
        exportButton: false,
        draggable: false,
        filtering: false,
        search: false,
        // headerStyle: {
        //   backgroundImage: "linear-gradient(#434f69, #6a94bf)",
        //   color: "#FFF",
        // },
      }}
      localization={{
        body: {
          emptyDataSourceMessage: "No se encuentran datos",
          filterRow: {
            filterTooltip: "Filter",
          },
        },
      }}
    />
  );
}

export default CardShopTable;
