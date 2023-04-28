import React from "react";

const PredictionTab = ({ predicted, setInput, input }) => {
  function getLastWord(sentence) {
    const words = sentence.split(" ");
    return words[words.length - 1];
  }
  // const predictedWord = getLastWord(predicted);
  console.log(predicted);
  const handler = () => {
    // setInput(input + " " + predictedWord);
  };
  return (
    <div className="grid grid-cols-3 h-full">
      <div onClick={handler} className={"text-center text-lg"}>
        {predicted[1] && predicted.length > 1 && predicted[1][1] > 0
          ? predicted[1][0]
          : ""}
      </div>
      <div className={"text-center border-x-2 border-[borderGrey] text-lg"}>
        {predicted[0] && predicted.length > 0 && predicted[0][1] > 0
          ? predicted[0][0]
          : ""}
      </div>
      <div className={"text-center text-lg"}>
        {predicted[2] && predicted.length > 1 && predicted[2][1] > 0
          ? predicted[2][0]
          : ""}
      </div>
    </div>
  );
};

export default PredictionTab;
