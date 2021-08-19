import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { DATE_STYLE } from "config";

const Timer = ({ localeType }) => {
  const formatedDate = new Date().toLocaleDateString(localeType, DATE_STYLE);
  return (
    <div css={container}>
      <h2>{formatedDate}</h2>
    </div>
  );
};

export default Timer;

const container = css`
  margin-bottom: 5px;
  h2 {
    font-size: 2rem;
  }
`;
