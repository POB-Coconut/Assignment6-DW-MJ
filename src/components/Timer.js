import React from "react";
import { getFormDateKR, getFormDateUS, getCurDate } from "utils";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Timer = ({ isKR }) => {
  const curDate = getCurDate();
  const formatedDate = isKR ? getFormDateKR(curDate) : getFormDateUS(curDate);

  return (
    <div css={container}>
      <h2>{formatedDate}</h2>
    </div>
  );
};

export default Timer;

const container = css`
  h2 {
    font-size: 2rem;
  }
`;
