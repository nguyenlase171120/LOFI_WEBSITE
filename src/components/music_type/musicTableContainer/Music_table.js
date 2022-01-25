import React from "react";
import Music_children_table from "../MusicTableChildren/Music_children_table";

function Music_table() {
  return (
    <div className="w-[345px] h-[466px] bg-black fixed  top-[20%] right-[8%] z-50 rounded-lg p-[20px]">
      <Music_children_table />
    </div>
  );
}

export default Music_table;
