import React from "react";

const Btn = ({ text, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-500 w-full rounded-md h-[3rem] text-[white] font-main shadow-md"
    >
      {children}
      {text}
    </button>
  );
};

export default Btn;
