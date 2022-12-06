import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import ActionsHeader from './ActionsHeader'
import { imgProductAvatarTable } from '../../common/urls'
import { HeaderTable, Table } from "../../common/templeate-table";

function ProductTable({ fndata, editableAction }) {
  const tableRef = React.createRef();
  return (
    <Table
      title={
        <HeaderTable url={imgProductAvatarTable} title="Productos stock">
          <ActionsHeader />
        </HeaderTable>
      }
      tableRef={tableRef}
      columns={[
        { title: "Producto", field: "name" },
        { title: "Codigo", field: "barcode" },
        { title: "Precio", field: "price" },
        { title: "Costo", field: "cost" },
        { title: "Disponibles", field: "count" },
        { title: "Vendidos", field: "num_sale" },
      ]}
      data={fndata}
      editable={{
        onRowUpdate: editableAction
      }}
      actions={[
        {
          icon: RefreshIcon,
          tooltip: "Refresh Data",
          isFreeAction: true,
          onClick: () => tableRef.current && tableRef.current.onQueryChange(),
        },
      ]}
      options={{
        pageSize: 10,
        actionsColumnIndex: -1,
        exportButton: false,
        draggable: false,
        filtering: false,
        search: true,
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
        toolbar: {
          searchPlaceholder: "producto o codigo",
        },
      }}
    />
  );
}

export default ProductTable;
