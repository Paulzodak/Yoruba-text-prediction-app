import React from "react";
import { useState, useEffect } from "react";
import { SlNote } from "react-icons/sl";
import SideNav from "../components/organisms/SideNav";
import Loader from "../components/molecules/Loader";
import Nav from "../components/organisms/Nav";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
        <div className="border-[#F1F1F1] border-2 h-full">
          <SideNav />
        </div>
        <div className="border-[#F1F1F1] border-2 h-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Home;
