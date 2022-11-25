import {useContext} from "react";
import SignUpContext from "../context/SignUpContext";

export default () => {
  const {showSignUp,setShowSignUp} = useContext(SignUpContext);

  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return { showSignUp, handleSignUp };
};
