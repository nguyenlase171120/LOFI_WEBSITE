import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { buttonSlice } from "../redux/buttonReducer";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../../firebase/Firebase_config";
import { share_selector } from "../selector/share_selector";
import { login_selector } from "../selector/login_selector";
import { valid_input } from "../error/Valid_form";

function Button_header(props) {
  const dispatch = useDispatch();
  const isResult = useSelector(share_selector);
  const isLoginForm = useSelector(login_selector);

  const handleShare = (e) => {
    e.preventDefault();
    dispatch(buttonSlice.actions.btn_share(!isResult));
  };

  const login_google = (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((response) => {
        console.log(response);
        dispatch(
          buttonSlice.actions.btn_google({
            email: response.user.email,
            name: response.user.displayName,
          })
        );
        dispatch(buttonSlice.actions.btn_login(!isLoginForm));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    dispatch(buttonSlice.actions.btn_login(!isLoginForm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = valid_input(props.email_user, props.password_user, "login");
    console.log(isValid);
    dispatch(
      buttonSlice.actions.showMessage({
        email: isValid.message.email,
        password: isValid.message.password,
        type: isValid.type,
      })
    );
  };
  const renderSwitch = (param) => {
    switch (param.type) {
      case "share": {
        return (
          <button
            className="btn_header py-[5px] px-[12px] mx-[15px]"
            onClick={handleShare}
          >
            {param.name}
          </button>
        );
      }
      case "sign_up": {
        return (
          <button className="btn_header py-[6px] px-[36px] ">
            {param.name}
          </button>
        );
      }
      case "login": {
        return (
          <button
            className="border-none bg-transparent py-[6px] px-[36px] text-white font-bold "
            onClick={handleLoginForm}
          >
            {param.name}
          </button>
        );
      }
      case "login_form": {
        return (
          <button
            onClick={handleSubmit}
            className="border-none bg-orange-500  rounded-full hover:bg-violet-500 hover:transition_1 py-[6px] px-[36px] text-white font-bold "
          >
            {param.name}
          </button>
        );
      }
      case "btn_share": {
        return (
          <button
            className="flex items-center border-none mt-[15px] bg-[#f3a952] py-[8px] text-[15px]
            transition_1
           rounded-full px-[36px] hover:scale-125 font-bold "
          >
            <FaTwitter className="mr-3 text-[25px]" />
            {param.name}
          </button>
        );
      }
      case "btn_google": {
        return (
          <button
            className="flex items-center border-none my-[10px] bg-white py-[8px] text-[15px]
            transition_1
           rounded-lg px-[50px] hover:scale-125 font-bold "
            onClick={login_google}
          >
            <FcGoogle className="mr-3 text-[25px]" />
            {param.name}
          </button>
        );
      }

      default: {
        console.log("default switch");
        break;
      }
    }
  };

  return <div>{renderSwitch(props)}</div>;
}

export default Button_header;
