
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from "../../context/auth";


import { settings } from '../config'

export const PrivateRoute = ({ component: Component, authentification, ...rest }) => {
  const { isAuth: { status} } = useContext(authContext);
  return (
    <Route
      {...rest} render={props => (
        status
          ? <Component {...props} />
          : <Redirect to={settings.path_default_access_restricted} />
      )}
    />
  )
}
