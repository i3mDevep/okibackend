import { useEffect, useContext, useState } from "react";
import { serviceRefreshToken } from "../services/auth";
import authContext from "../context/auth";

export const useInitialRequest = () => {
  const { activateAuth } = useContext(authContext);
  const [request, setrequest] = useState(true);
  const [error, seterror] = useState('');
  useEffect(async () => {
    try {
      let body = {
        refresh: window.localStorage.getItem("oki-refresh"),
      };
      let response = await serviceRefreshToken(body);
      activateAuth(response.data.access, body.refresh);
    } catch (error) {
      seterror(error);
      console.error(error);
    } finally {
      setrequest(false);
    }
  }, []);
  return { request, error }
};
