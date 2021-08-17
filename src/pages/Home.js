import React, { useState, useCallback } from "react";
import { quickSort, getNumsArray } from "utils";
import { Timer, Clock, InputField, OutputField } from "components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [ascendingNums, setAscendingNums] = useState([]);
  const [descendingNums, setDescendingNums] = useState([]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setAscendingNums(quickSort(getNumsArray(inputValue)));
      setTimeout(() => {
        setDescendingNums(quickSort(getNumsArray(inputValue)).reverse());
      }, 3000);
    },
    [inputValue]
  );

  return (
    <div>
      <Timer isKR={true} />
      <Timer isKR={false} />
      <Clock />
      <InputField
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
      />
      <OutputField result={ascendingNums} />
      <OutputField result={descendingNums} />
    </div>
  );
};

export default Home;
