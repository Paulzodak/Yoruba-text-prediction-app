import React from "react";
import { useState, useEffect } from "react";
import { SlNote } from "react-icons/sl";
import SideNav from "../components/organisms/SideNav";
import Loader from "../components/molecules/Loader";
import Nav from "../components/organisms/Nav";
import { getUser } from "../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firestore";
import Utility from "../components/organisms/Utility";
import { getNotes } from "../slices/notesSlice";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firestore";
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.uid));

        const colRef = collection(db, "notes");
        const docRef = doc(db, "notes", user.uid);
        const q = query(docRef, user.uid);
        onSnapshot(q, () => {
          dispatch(getNotes(user.uid));
        });
      } else if (!user) {
      }
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="bg-[white] h-[40rem] w-[90%] shadow-2xl mx-auto mt-[2rem]  overflow-hidden">
      {loading && <Loader />}
      <div className="h-[3rem] bg-[black] px-[2rem] pt-[0.6rem]">
        {/* <div className="grid grid-cols-2"> */}
        {/* <SlNote size="2rem" color="white" /> */}
        <div className="text-[white] text-xl font-main ">TEXT NOTEPAD</div>

        {/* </div> */}
      </div>
      <div className="grid grid-cols-[30%_70%] h-full">
        <div className="border-borderGrey border-2 h-full">
          <SideNav />
        </div>
        <div className="border-borderGrey border-2 h-full">
          <Nav />
          <div>
            <Utility />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
