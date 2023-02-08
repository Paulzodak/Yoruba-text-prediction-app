import React from "react";

const BackDrop = ({ children }) => {
  return (
    <div className=" absolute top-0 left-0 bg-[#0000007c] w-[100vw] h-screen">
      {children}
    </div>
  );
};

export default BackDrop;
