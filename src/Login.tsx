import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const Login = () => {
  const responseGoogle1 = (response?: any) => {
    console.log(response);
    console.log("成功");
  };
  const responseGoogle2 = (response?: any) => {
    console.log(response);
    console.log("失敗");
  };
  if (!process.env.REACT_APP_GOOGLE_CLIENT_ID) return null;
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        buttonText="ログイン"
        onSuccess={responseGoogle1}
        onFailure={responseGoogle2}
        cookiePolicy={"single_host_origin"}
      />
      <div>Hello</div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle1}
      ></GoogleLogout>
    </>
  );
};

export default Login;
