import {useContext} from "react";
import LoginContext from "../context/LoginContext";

export default () => {
  const {showLogin, setShowLogin} = useContext(LoginContext);

  const handleLogin = () => {
    setShowLogin(!showLogin);
    console.log(showLogin)
  };

  return { showLogin, handleLogin };
};
