import React, { useContext } from 'react'
import FormLogin from "../../components/forms/login";
import { signIn } from "../../services/auth";
import AuthContext from '../../context/auth'

function FormLoginContainer() {
  const { activateAuth }  = useContext(AuthContext)
  const handleOnSubmit = async (data) => {
    try {
      let response = await signIn(data);
      activateAuth(response.data.access, response.data.refresh)
    } catch (error) {
      console.error(error);
    }
  };
  return <FormLogin onSubmit={handleOnSubmit} />;
}
export default FormLoginContainer;
