import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-[2rem] grid grid-cols-8  bg-greenBgGrey ">
      <div className=" mx-auto w-full text-center mt-[3px] text-lg">File</div>
      <div className=" mx-auto w-full text-center mt-[3px] text-lg">Edit</div>
      <div className=" mx-auto w-full text-center mt-[3px] text-lg">Insert</div>
    </div>
  );
};

export default Nav;
