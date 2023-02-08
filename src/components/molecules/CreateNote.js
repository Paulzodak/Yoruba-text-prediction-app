import React from "react";
import BackDrop from "../atom/BackDrop";
import { useState } from "react";
import { AiOutlineClose as CloseBtn } from "react-icons/ai";
import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firestore";
import { useSelector } from "react-redux";
const CreateNote = ({ setShowCreateNote }) => {
  const [selectedColor, setSelectedColor] = useState(undefined);
  const [title, setTitle] = useState("");
  const { user } = useSelector((state) => state.user);
  const dummyColors = [
    {
      id: 0,
      color: "#9E0142",
      code: "bg-[#9E0142]",
      active: false,
    },
    {
      id: 1,
      color: "#F46D43",
      code: "bg-[#F46D43]",
      active: false,
    },
    {
      id: 2,
      color: "#FDAE61",
      code: "bg-[#FDAE61]",
      active: false,
    },
    {
      id: 3,
      color: "#ABDDA4",
      code: "bg-[#ABDDA4]",
      active: false,
    },
    {
      id: 4,
      color: "#3288BD",
      code: "bg-[#3288BD]",
      active: false,
    },
    {
      id: 5,
      color: "#5E4FA2",
      code: "bg-[#5E4FA2]",
      active: false,
    },
  ];
  const [colors, setColors] = useState(dummyColors);
  const colorHandler = (item, index) => {
    setSelectedColor(item.color);
    setColors(() => {
      const temp = [...dummyColors];
      temp[index].active = true;
      return temp;
    });
  };
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  console.log(selectedColor);
  const btnColor = `bg-[${selectedColor}]`;
  const submitHandler = () => {
    if (selectedColor && title.length > 1) {
      const colRef = collection(db, "notes");
      const docRef = doc(db, "notes", user.uid);
      const data = {
        title: {
          title: title,
          color: selectedColor,
          content: "",
          lastEdit: "",
        },
      };
      updateDoc(docRef, data).then(() => setShowCreateNote(false));

      console.log("valid");
    }
  };
  //   console.log(title);

  return (
    <BackDrop>
      <div className="relative h-[17rem] w-[20rem] bg-[white] rounded-lg shadow-xl mx-auto mt-[12%] px-auto">
        <CloseBtn
          onClick={() => {
            setShowCreateNote(false);
          }}
          size="1.5rem"
          className="relative top-[0.5rem] right-[-18rem]"
        />
        <div className="flex justify-center bg-white items-center text-xl font-bold font-main  mx-auto  h-[3rem] w-[80%] rounded-xl relative">
          <span className="border-b-[2px]">Add</span>
        </div>
        <br />
        <div className="grid grid-cols-6  mx-7 ">
          {colors.map((item, index) => {
            return (
              <div
                onClick={() => {
                  colorHandler(item, index);
                }}
                className={`${item.code} h-8 w-8 rounded-full ${
                  item.active && "border-2"
                }`}
              ></div>
            );
          })}
        </div>
        <br />
        <input
          placeholder="Title"
          onChange={titleHandler}
          className="px-3 font-main w-[80%] h-[2.5rem] rounded-md bg-zinc-100 drop-shadow-sm flex justify-center items-center mx-auto"
        />
        <button
          onClick={submitHandler}
          className={`float-right px-[1.5rem] py-[0.5rem] text-md rounded-md bg-[red] mt-5 mx-8 text-white font-main ${btnColor} `}
        >
          Submit
        </button>
      </div>
    </BackDrop>
  );
};

export default CreateNote;
