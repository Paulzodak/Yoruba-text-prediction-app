import React from "react";
import { useState } from "react";
import useAutoCapitalize from "../../hooks/useAutoCapitalize";
import { useSelector } from "react-redux";
const NoteItem = ({ data }) => {
  const { activeNote } = useSelector((state) => state.notes);
  const title = useAutoCapitalize(data.title);
  const content = useAutoCapitalize(data.content);
  const lastEdit = useAutoCapitalize(data.lastEdit);
  console.log(data);
  return (
    <div
      className={`py-[0.8rem] px-[0.6rem] my-2 rounded-lg shadow-md  font-main  border-[1px] border-[borderGrey] ${
        data.active && "bg-gray-100"
      } border-l-[${data.color}]`}
    >
      <div className="font-bold text-lg truncate ...">{title}</div>
      <div className="truncate ...">
        {data.content.length > 1 ? content : "..."}
      </div>
      <div className="font-thin italic truncate ...">
        {data.lastEdit.length > 1 ? lastEdit : "..."}
      </div>
    </div>
  );
};

export default NoteItem;
