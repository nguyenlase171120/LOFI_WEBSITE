import { useState } from "react";
import gift_web from "../../assets/video/gift";
import Button_header from "../button/Button_header";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login_selector } from "../selector/login_selector";
import { buttonSlice } from "../redux/buttonReducer";
import { valid_input } from "../error/Valid_form";

function Login_form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");

  const dispatch = useDispatch();
  const isLogin = useSelector(login_selector);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mess_error = valid_input(email, password, "login");
    if (mess_error.type === false) {
      setMsgError(mess_error.message);
      return;
    }

    //Login accounts
    const user_params = {
      email: "mchuinuadi@gmail.com",
      password: "lyly2552017",
    };

    if (email === user_params.email && password === user_params.password) {
      localStorage.setItem("user_information", JSON.stringify(user_params));
      dispatch(buttonSlice.actions.btn_login(!isLogin));
    }
  };

  const handleCloseLogin = (e) => {
    e.preventDefault();
    dispatch(buttonSlice.actions.btn_login(!isLogin));
  };
  return (
    <div className="z-50 opacity-[4px] absolute bg-red-300 top-0 left-0 w-full h-[900px] ">
      <div
        className="absolute bg-transparent top-1/2 left-1/2 z-100 translate-x-[-50%] translate-y-[-50%] w-[400px] h-[500px]

      flex flex-col items-center justify-center   
      "
      >
        <img src={gift_web} alt="Loading..." className="h-[150px]" />
        <h1 className="text-white text-3xl my-[20px] font-bold">
          Welcome back!
        </h1>
        <p className="mb-[15px] font-semibold text-white text-lg">
          Login to your account
        </p>
        <form className="flex flex-col items-center justify-center w-full">
          <input
            type="email"
            placeholder="Email"
            className="input_form"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p className="mess_error">{msgError.email}</p>
          <input
            type="password"
            placeholder="Password"
            className="input_form"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <p className="mess_error">{msgError.password}</p>
        </form>

        <button
          onClick={handleSubmit}
          className="border-none bg-orange-500  rounded-full hover:bg-violet-500 hover:transition_1 py-[6px] px-[36px] text-white font-bold "
        >
          Login
        </button>
        <p className="text-orange-500 font-semibold mt-3 cursor-pointer mb-[15px]">
          Forgot password ?
        </p>

        <Button_header type="btn_google" name="Login with google" />

        <div className="flex items-center ">
          <p className="text-white mr-[4px]">Don't have an account? </p>
          <span className="text-orange-500 cursor-pointer font-bold">
            Sign up for free
          </span>
        </div>
      </div>

      <FaTimes
        className="absolute top-10 right-10 x_icon"
        onClick={handleCloseLogin}
      />
    </div>
  );
}

export default Login_form;
