import React from "react";
import Btn from "../atom/Btn";
import { MdAdd as AddIcon } from "react-icons/md";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Search from "../molecules/Search";
import { auth } from "../../firestore";
import NoteItem from "../atom/NoteItem";
import { useSelector } from "react-redux";
const SideNav = () => {
  const { notes } = useSelector((state) => state.notes);

  const Notes = [
    {
      title: "School",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lastEdit: "2mins ago",
    },
    {
      title: "CPE502",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lastEdit: "now",
    },
    {
      title: "Church",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lastEdit: "yesterday",
    },
    {
      title: "Church",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lastEdit: "yesterday",
    },
    {
      title: "Church",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lastEdit: "yesterday",
    },
  ];
  return (
    <div className=" my-[0.5rem] ">
      <div className="px-[1rem]">
        <Btn text="Create new">
          <AddIcon size="2rem" className="inline" color="white" />
        </Btn>
      </div>
      <hr className="mt-[1rem]" />
      <div className="px-[1rem] mt-[1rem]">
        <Search />
      </div>
      <hr className="mt-[1rem]" />
      <div className="h-[2.5rem] bg-greenBgGrey w-full" />
      <hr className="" />
      <div className="overflow-scroll h-[26rem]">
        {notes.length > 1 ? (
          notes.map((item) => {
            return <NoteItem data={item} />;
          })
        ) : (
          <div className="mx-[1rem] mt-[2rem] font-main"> No saved notes.</div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
