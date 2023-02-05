import React from "react";
import Btn from "../atom/Btn";
import { MdAdd as AddIcon } from "react-icons/md";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firestore";
const SideNav = () => {
  return (
    <div className=" my-[0.5rem]">
      <div className="px-[1rem]">
        <Btn text="Create new">
          <AddIcon size="2rem" className="inline" color="white" />
        </Btn>
      </div>
      <hr className="mt-[1rem]" />
    </div>
  );
};

export default SideNav;
