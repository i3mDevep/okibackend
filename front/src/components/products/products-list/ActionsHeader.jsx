import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function ActionsHeader() {
  let history = useHistory();
  return (
    <div style={{ display: "inline-flex" }}>
      <Button
        style={{ margin: "0 10px", backgroundColor: "#434f69" }}
        variant="contained"
        color="primary"
        onClick={() => history.push("/app/products/create")}
      >
        Crear Nuevo
      </Button>
      <Button
        style={{ margin: "0 10px", backgroundColor: "#6a94bf" }}
        variant="contained"
        color="primary"
        onClick={() => history.push("/app/products/detail/1")}
      >
        Ver Detalle
      </Button>
    </div>
  );
}
export default ActionsHeader;
