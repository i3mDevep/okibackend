import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import ReactPrint from "react-to-print";
import { logoMain } from "../../components/common/urls";
import { currencyFormat } from "../../utils/formatCOP";
import moment from "moment";

const Facture = forwardRef(({ sale }, ref) => {
  return (
    <div ref={ref}>
      <div style={{ width: "200px", margin: "0 auto" }}>
        <img style={{ width: "100%" }} src={logoMain} />
      </div>
      <div>
        <hr style={{ borderStyle: "dashed" }} />
      </div>
      <span style={{ margin: "10px", fontSize: "18px" }}>
        {moment(Date.now()).format("YYYY/MM/DD HH:mm:ss")}
      </span>
      <div>
        <span style={{ margin: "10px", fontSize: "18px" }}>
          NIT: 1017250445-4
        </span>
      </div>
      <div>
        <hr style={{ borderStyle: "dashed" }} />
      </div>
      <table style={{ padding: "0 30px", fontSize: "16px" }}>
        <thead>
          <th style={{ textAlign: "left" }}>c</th>
          <th>producto</th>
          <th>subtotal</th>
        </thead>
        <tbody>
          {sale &&
            sale.products.map((p) => (
              <tr>
                <td>{p.count}</td>
                <td>{p.product.name}</td>
                <td>{currencyFormat(p.product.price * p.count)}</td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total:</td>
            <td>{currencyFormat(sale.total_sale_price || 0)} </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <hr style={{ borderStyle: "dashed" }} />
      </div>
      <div style={{ margin: "0 auto" }}>
        <span style={{ margin:'0 40px', fontSize: "18px" }}>Gracias por tu compra</span>
      </div>
    </div>
  );
});

export default function SimpleDialog(props) {
  const { onClose, open, sales } = props;
  const myref = useRef(null);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Resumen de venta</DialogTitle>
      <Facture sale={sales} ref={myref} />
      <div style={{ margin: "10px auto" }}>
        <ReactPrint
          trigger={() => <a href="#">Imprimir factura</a>}
          content={() => myref.current}
        />
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
