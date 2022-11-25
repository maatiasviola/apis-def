import {useContext} from "react";
import ForgotPasswordContext from "../context/ForgotPasswordContext";

export default () => {
  const {showForgotPassword,setShowForgotPassword} = useContext(ForgotPasswordContext);

  const handleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return { showForgotPassword, handleForgotPassword };
};
