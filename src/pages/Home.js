import React, { useState, useCallback } from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { COLOR_STYLES, flexCenter } from "styles";
import { quickSort, getNumsArray, inputValidate } from "utils";
import { Timer, Clock, InputField, OutputField } from "components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [ascendingNums, setAscendingNums] = useState([]);
  const [descendingNums, setDescendingNums] = useState([]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputValidate(inputValue)) {
        alert("잘못된 형식의 입력 데이터입니다.");
        return;
      }

      setAscendingNums(quickSort(getNumsArray(inputValue)));
      setTimeout(() => {
        setDescendingNums(quickSort(getNumsArray(inputValue)).reverse());
      }, 3000);
    },
    [inputValue]
  );

  return (
    <div css={container}>
      <main css={main}>
        <section css={timeSection}>
          <Timer isKR={true} />
          <Timer isKR={false} />
          <Clock />
          <InputField
            inputValue={inputValue}
            handleSubmit={handleSubmit}
            setInputValue={setInputValue}
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
  text-align: center;
  padding: 30px 20px;
`;

const resultSection = css`
  height: inherit;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
