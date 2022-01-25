import { useState } from "react";
import {
  FcSettings,
  FcAssistant,
  FcAdvertising,
  FcAnswers,
} from "react-icons/fc";
import Music_table from "../musicTableContainer/Music_table";

function Music_children({ props }) {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="flex flex-col items-center justify-center p-[15px] w-[79px] h-[279px] bg-red-200 rounded-full">
      <FcSettings className="icon_setting " onClick={handleShow} />
      <FcAssistant className="icon_setting mt-[10px]" />
      <FcAdvertising className="icon_setting mt-[10px]" />
      <FcAnswers className="icon_setting mt-[10px]" />
      {isShow && <Music_table />}
    </div>
  );
}

export default Music_children;
