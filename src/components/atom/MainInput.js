import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContent } from "../../slices/notesSlice";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firestore";
import { Toast } from "../../globals";
import PredictionTab from "./PredictionTab";
const MainInput = ({ setInput, input, predicted }) => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const { user } = useSelector((state) => state.user);
  const { activeNote } = useSelector((state) => state.notes);
  // const [input, setInput] = useState(activeNote.content);
  console.log(notes);
  console.log(input);
  const setInputHandler = (e) => {
    setInput(e.target.value);
  };

  const taphandler = (e) => {
    console.log(e);
    // setInput(input + " " + predicted);
  };
  useEffect(() => {
    const active = notes.filter((item) => item.active && item.id);
    setInput(active[0].content ? active[0].content : "");
    console.log(active);
  }, [notes]);
  const onBlurHandler = (e) => {
    // setInput(e.target.value);
    // if (selectedColor && title.length > 1) {
    //   setShowCreateNote(false);
    //   const colRef = collection(db, "notes");
    const active = notes.filter((item) => item.active && item.id);
    dispatch(
      setContent({
        id: active[0].id,
        content: input,
      })
    );
    // const docRef = doc(db, "notes", user.uid);
    // const data = { notes: notes };
    // updateDoc(docRef, data).then(() => {
    // Toast.fire({
    //   icon: "done",
    //   title: "Auto saved",
    // });
  };

  console.log("valid");

  return (
    <textarea
      className="w-full h-[32rem] border-2 p-[1rem] pt-[2rem]"
      onChange={setInputHandler}
      onBlur={onBlurHandler}
      // onFocus={onBlurHandler}
      value={input}
      onClick={taphandler}
    >
      {/* <div className="h-[2rem] w-full ">
        wqsws
        <PredictionTab
          setInput={setInput}
          predicted={predicted}
          input={input}
        />
      </div> */}
      <div>children</div>
    </textarea>
  );
};

export default MainInput;
