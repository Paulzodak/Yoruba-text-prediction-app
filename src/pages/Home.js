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
import MainInput from "../components/atom/MainInput";
import CreateNote from "../components/molecules/CreateNote";
import PredictionTab from "../components/atom/PredictionTab";
import axios from "axios";
const Home = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [showCreateNote, setShowCreateNote] = useState(false);
  const { activeNote } = useSelector((state) => state.notes);
  const { notes } = useSelector((state) => state.notes);
  const [predicted, setPredicted] = useState("");
  const [input, setInput] = useState(
    activeNote.content ? activeNote.content : ""
  );
  // console.log(activeNote.content);
  // useEffect(() => {
  //   setInput(activeNote.content);
  // }, [notes]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        console.log("i ran");
        dispatch(getUser(user.uid));
        dispatch(getNotes(user.uid));
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
  console.log(input);
  useEffect(() => {
    function getLastFourWords(sentence) {
      const words = sentence.split(" ");
      const lastFourWords = words.slice(-4);
      const result = lastFourWords.join(" ");
      return result;
    }
    // const input_text = input.length > 2 ? getLastFourWords(input) : "Wa si";
    const input_text = getLastFourWords(input);
    console.log(input_text);
    axios
      .get(`http://127.0.0.1:5000/send/${input_text}`)
      .then((res) => {
        console.log(res.data.text);
        setPredicted(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);
  // function getLastWord(sentence) {
  //   const words = sentence.split(" ");
  //   return words[words.length - 1];
  // }
  // const predictedWord = getLastWord(predicted);
  return (
    <div className="bg-[white] h-[40rem] w-[90%] shadow-2xl mx-auto mt-[2rem]  overflow-hidden">
      {showCreateNote && <CreateNote setShowCreateNote={setShowCreateNote} />}
      {loading && <Loader />}
      <div className="h-[3rem] bg-[black] px-[2rem] pt-[0.6rem]">
        {/* <div className="grid grid-cols-2"> */}
        {/* <SlNote size="2rem" color="white" /> */}
        <div className="text-[white] text-xl font-main ">TEXT NOTEPAD</div>

        {/* </div> */}
      </div>
      <div className="grid grid-cols-[30%_70%] h-full">
        <div className="border-borderGrey border-2 h-full">
          <SideNav setShowCreateNote={setShowCreateNote} />
        </div>
        <div className="border-borderGrey border-2 h-full">
          <Nav />
          <div>
            <Utility />
          </div>
          <div className="h-[2rem] w-full ">
            <PredictionTab
              setInput={setInput}
              predicted={predicted}
              input={input}
            />
          </div>
          <MainInput predicted={predicted} setInput={setInput} input={input} />
        </div>
      </div>
    </div>
  );
};

export default Home;
