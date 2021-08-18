import React, { useState, useCallback } from "react";
import { quickSort, getNumsArray, inputValidate } from "utils";
import { Timer, Clock, InputField, OutputField } from "components";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { COLOR_STYLES, flexCenter } from "styles";

const Home = () => {
  const [isLoading, setIsLoading] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [ascendingNums, setAscendingNums] = useState([]);
  const [descendingNums, setDescendingNums] = useState([]);

  const handleChange = useCallback(
    (e) => {
      const word = e.target.value;
      setInputValue(word);
    },
    [setInputValue]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!inputValidate(inputValue)) {
        alert("잘못된 형식의 입력 데이터입니다.");
        clearAllValues();
        return;
      }

      setIsLoading(true);
      setDescendingNums([]);
      setAscendingNums(quickSort(getNumsArray(inputValue), "asc"));

      setTimeout(() => {
        setDescendingNums(quickSort(getNumsArray(inputValue), "desc"));
        setIsLoading(false);
      }, 3000);
    },
    [inputValue]
  );

  const handleClick = () => {
    clearAllValues();
  };

  const clearAllValues = () => {
    setInputValue("");
    setAscendingNums([]);
    setDescendingNums([]);
  };

  return (
    <div css={container}>
      <main css={main}>
        <section css={timeSection}>
          <Timer isKR={true} />
          <Timer isKR={false} />
          <Clock />
          <InputField
            props={{
              inputValue,
              handleSubmit,
              handleChange,
              handleClick,
              isLoading,
            }}
          />
        </section>
        <section css={resultSection}>
          <OutputField result={ascendingNums} ascending={true} />
          <OutputField result={descendingNums} ascending={false} />
        </section>
      </main>
    </div>
  );
};

export default Home;

const container = css`
  ${flexCenter}
  height: 100vh;
  background: ${COLOR_STYLES.primaryGradient};
  padding: 70px 100px;
`;

const main = css`
  width: 100%;
  height: 100%;
  ${flexCenter}
  color: ${COLOR_STYLES.white};
  border-radius: 5px;
  position: relative;
`;

const timeSection = css`
  height: inherit;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px;
`;

const resultSection = css`
  height: inherit;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-wrap: break-word;
`;
