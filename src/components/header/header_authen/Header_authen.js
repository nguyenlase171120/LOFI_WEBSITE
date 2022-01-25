import React from "react";
import Button_header from "../../button/Button_header";

function Header_authen() {
  return (
    <div className="flex items-center">
      <Button_header name="Sign up" type="sign_up" />
      <Button_header name="Login" type="login" />
    </div>
  );
}

export default Header_authen;
