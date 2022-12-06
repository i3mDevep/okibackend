import React, { createContext, useState } from "react";
import { closeSession, openSession } from '../../utils/session'
import moment from 'moment'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ status: false });

  const value = {
    isAuth,
    activateAuth: (token, refresh) => {
      if ((token, refresh)) {
        const time = moment().add(23, 'h').toDate();
        openSession(time, token, refresh)
        setIsAuth({ status: true });
      } else {
        setIsAuth({ status: false });
        closeSession()
      }
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;
