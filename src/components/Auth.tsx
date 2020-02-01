import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Auth = (props: any) => {
  const [login, setLogin] = useState(true);
  return login ? props.children : <Redirect to={"/login"} />;
};

export default Auth;
