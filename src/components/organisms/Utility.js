import React from "react";
import { ImBin as BinIcon } from "react-icons/im";
const Utility = () => {
  return (
    <div className="h-[3rem] border-borderGrey border-y-[1px] grid grid-cols-[85%_15%]">
      <div className="text-2xl mx-[1rem] mt-[0.3rem] font-main">About</div>
      <div className="border-borderGrey border-x-[1px]">
        <BinIcon size="1.5rem" className="mx-auto mt-[0.5rem]" />
      </div>
    </div>
  );
};

export default Utility;
