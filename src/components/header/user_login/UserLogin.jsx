import React from "react";
import image_user from "../../../assets/images/images_website";

function UserLogin(props) {
  return (
    <div>
      <div className="flex items-center justify-center text-red-300 font-bold text-[15px]">
        <p className="mr-[10px]">Welcome back , Ly Ly nguyen</p>
        <img
          src={image_user}
          alt="Loading...."
          className="rounded-3xl h-[50px] mr-[10px] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default UserLogin;
