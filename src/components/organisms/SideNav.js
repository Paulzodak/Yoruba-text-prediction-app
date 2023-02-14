import React from "react";
import Btn from "../atom/Btn";
import { MdAdd as AddIcon } from "react-icons/md";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Search from "../molecules/Search";
import { auth } from "../../firestore";
import NoteItem from "../atom/NoteItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../slices/notesSlice";
const SideNav = ({ setShowCreateNote }) => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const { activeNote } = useSelector((state) => state.notes);
  console.log(activeNote);
  console.log(notes);
  const noteItemHandler = (item) => {
    dispatch(setActiveNote(item));
  };

  return (
    <div className=" my-[0.5rem] ">
      <div className="px-[1rem]">
        <Btn text="Create new" onClick={() => setShowCreateNote(true)}>
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
            return (
              <div onClick={() => noteItemHandler(item)}>
                <NoteItem data={item} />
              </div>
            );
          })
        ) : (
          <div className="mx-[1rem] mt-[2rem] font-main"> No saved notes.</div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
