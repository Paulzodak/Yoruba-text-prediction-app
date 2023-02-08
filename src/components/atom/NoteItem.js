import React from "react";

const NoteItem = ({ data }) => {
  return (
    <div className="py-[0.8rem] px-[0.6rem] border-l-[2px] font-main border-b-[1px]">
      <div className="font-bold text-lg">{data.title}</div>
      <div className="truncate ...">{data.content}</div>
      <div className="font-thin italic">{data.lastEdit}</div>
    </div>
  );
};

export default NoteItem;
