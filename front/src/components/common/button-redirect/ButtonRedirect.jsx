import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function ButtonRedirect({ redirect, title, color }) {
  let history = useHistory();

  function handleClick() {
    history.push(redirect);
  }

  return (
    <Button variant="outlined" color={color} onClick={handleClick}>
      {title}
    </Button>
  );
}
