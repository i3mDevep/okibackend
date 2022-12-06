import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const SaleDetail = ({ sale_detail = [] }) => (
  <Table size="small" aria-label="purchases">
    <TableHead>
      <TableRow>
        <TableCell>Producto</TableCell>
        <TableCell>Codigo</TableCell>
        <TableCell>Cantidad</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {sale_detail.map((sale) => (
        <TableRow key={sale.id}>
          <TableCell component="th" scope="row">
            {sale.product.name}
          </TableCell>
          <TableCell>{sale.product.barcode}</TableCell>
          <TableCell>{sale.count}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
