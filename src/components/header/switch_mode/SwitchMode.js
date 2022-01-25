import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonSlice } from "../../redux/buttonReducer";
import { modeSelector } from "../../selector/mode_selector";
import { FaSun, FaMoon } from "react-icons/fa";

function SwitchMode() {
  const dispatch = useDispatch();
  const valueMode = useSelector(modeSelector);

  const handleMode = (e) => {
    e.preventDefault();

    let isResult = "";
    valueMode === "dark" ? (isResult = "light") : (isResult = "dark");
    dispatch(buttonSlice.actions.switchMode(isResult));
  };
  return (
    <div>
      <button
        className=" bg-white py-[6px] px-[10px] rounded-lg"
        onClick={handleMode}
      >
        {valueMode === "dark" ? (
          <FaSun className="text-yellow-600" />
        ) : (
          <FaMoon className="text-gray-600" />
        )}
      </button>
    </div>
  );
}

export default SwitchMode;
