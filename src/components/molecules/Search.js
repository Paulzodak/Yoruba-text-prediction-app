import React from "react";
import { ImSearch as SearchIcon } from "react-icons/im";

const Search = () => {
  return (
    <div className="grid grid-cols-[85%_15%]">
      <input placeholder="Search..." className="h-[2rem] text-xl" />
      <SearchIcon
        size="1.2rem"
        color="#97898C"
        className="mt-[0.5rem] ml-[0.5rem] "
      />
    </div>
  );
};

export default Search;
