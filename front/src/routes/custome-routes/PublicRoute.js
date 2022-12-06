import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/auth";

import { settings } from "../config";

export const PublicRoute = ({
  component: Component,
  authentification,
  restricted,
  ...rest
}) => {
  const { isAuth: { status} } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        status && restricted ? (
          <Redirect to={settings.path_default_access_allow} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
