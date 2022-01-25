import gift_web from "../../assets/video/gift";
import Header_authen from "./header_authen/Header_authen";
import Header_link from "./header_link/Header_link";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { authentication } from "../../firebase/Firebase_config";
import UserLogin from "./user_login/UserLogin";
import Button_header from "../button/Button_header";
import SwitchMode from "./switch_mode/SwitchMode";
import { useSelector } from "react-redux";

function Header({ props }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(async () => {
    await onAuthStateChanged(authentication, (user) => {
      if (user) {
        setIsLogin(true);
      }
    });

    const isResult = localStorage.getItem("user_information");
    if (isResult) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-between absolute top-0 left-0  bg-transparent w-full h-[80px]  z-10">
      <img src={gift_web} alt="Loading..." className="h-[100px]" />
      <Header_link />
      <Button_header name="Share" type="share" />
      <SwitchMode />
      {isLogin ? <UserLogin /> : <Header_authen />}
    </div>
  );
}

export default Header;
