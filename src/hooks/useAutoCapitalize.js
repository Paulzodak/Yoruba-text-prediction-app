import React from "react";

const useAutoCapitalize = (data) => {
  return data && data.charAt(0).toUpperCase() + data.slice(1);
};

export default useAutoCapitalize;
