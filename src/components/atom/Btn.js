import React from "react";

const Btn = ({ text, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-500 w-full rounded-sm h-[3rem] text-[white] font-main"
    >
      {children}
      {text}
    </button>
  );
};

export default Btn;
