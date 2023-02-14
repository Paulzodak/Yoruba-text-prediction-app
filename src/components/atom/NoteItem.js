import React from "react";
import { useState } from "react";
import useAutoCapitalize from "../../hooks/useAutoCapitalize";
const NoteItem = ({ data }) => {
  console.log(data.color);
  const border = `border-l-[${data.color}]`;
  console.log(border);
  const title = useAutoCapitalize(data.title);
  const content = useAutoCapitalize(data.content);
  const lastEdit = useAutoCapitalize(data.lastEdit);
  return (
    <div
      className={`py-[0.8rem] px-[0.6rem]  font-main  border-[2px] border-[borderGrey]`}
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
