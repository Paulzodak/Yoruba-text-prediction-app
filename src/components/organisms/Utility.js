import React from "react";
import { ImBin as BinIcon } from "react-icons/im";
import { useSelector } from "react-redux";
import useAutoCapitalize from "../../hooks/useAutoCapitalize";
const Utility = () => {
  const { activeNote } = useSelector((state) => state.notes);
  const title = useAutoCapitalize(activeNote.title);
  return (
    <div className="h-[3rem] border-borderGrey border-y-[1px] grid grid-cols-[85%_15%]">
      <div className="text-2xl mx-[1rem] mt-[0.3rem] font-main">
        {activeNote.title && title}
      </div>
      <div className="border-borderGrey border-x-[1px]">
        <BinIcon size="1.5rem" className="mx-auto mt-[0.5rem]" />
      </div>
    </div>
  );
};

export default Utility;
