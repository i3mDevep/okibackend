import React from "react";
import { Alert } from "@material-ui/lab";

export function showErrors(errors) {
  const alert = Object.entries(errors).map((error) => {
    if (error[1].type === "required") {
      return (
        <Alert key={error[0]} severity="error">
          Debes seleccionar {error[0]}
        </Alert>
      );
    } else if (error[1].type === "min") {
      return (
        <Alert key={error[0]} severity="error">
          Debes seleccionar un valor minimo permitido
        </Alert>
      );
    }
  });
  return alert;
}
