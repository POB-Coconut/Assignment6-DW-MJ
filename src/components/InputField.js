import React, { useCallback } from "react";

const InputField = ({ inputValue, setInputValue, handleSubmit }) => {
  const handleChange = useCallback(
    (e) => {
      const word = e.target.value;
      setInputValue(word);
    },
    [setInputValue]
  );

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="inputValue"
        rows="5"
        value={inputValue}
        onChange={handleChange}
      ></textarea>
      <button>go</button>
      <button>reset</button>
    </form>
  );
};

export default InputField;
