import React from "react";
import Button_header from "../button/Button_header";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { buttonSlice } from "../redux/buttonReducer";
import { share_selector } from "../selector/share_selector";

function ShareForm() {
  const dispatch = useDispatch();
  const isResult = useSelector(share_selector);
  const handleShare = (e) => {
    e.preventDefault();
    dispatch(buttonSlice.actions.btn_share(!isResult));
  };

  return (
    <div className="w-[440px] h-[263px] absolute top-[50%] left-[50%]  rounded-md translate-x-[-50%] translate-y-[-50%] bg-black p-[20px] flex flex-col items-center justify-center">
      <h2 className="text-white mb-[15px] font-bold text-3xl">Share</h2>
      <p className="text-gray-500 mb-[10px]">
        Copy link to share your combination of music ,scenery and sounds with
        your friends
      </p>
      <input
        type="text"
        value="https://lofi.co?s=Y2hpbGxfdmliZXMmMCYwMTA1MCY="
        className="w-[100%] bg-gray-600 border border-gray-400 text-white rounded-md pl-[10px] text-[14px] my-[15px]"
      />
      <Button_header name="Share" type="btn_share" />
      <FaTimes
        className="x_icon absolute top-[5%] left-[93%]  "
        onClick={handleShare}
      />
    </div>
  );
}

export default ShareForm;
