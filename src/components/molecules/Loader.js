import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="w-full left-0 h-full absolute top-0 bg-[#0000007c]">
      <div className=" mt-[40vh] mx-auto w-[8rem] h-[8rem] ">
        <ThreeCircles
          className="mt-300"
          height="100%"
          width="100%"
          color="#189ca9"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
};

export default Loader;
