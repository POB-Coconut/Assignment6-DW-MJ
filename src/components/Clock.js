import React, { useEffect, useState } from "react";
import { getFormTime, getCurTime } from "utils";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Clock = () => {
  const [curTime, setCurTime] = useState(getCurTime());
  const [formatedTime, setFormatedTime] = useState(null);

  useEffect(() => {
    setFormatedTime(getFormTime(curTime));

    const timer = setInterval(() => {
      setCurTime(getCurTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [curTime]);

  return (
    <div css={container}>
      <h1>{formatedTime}</h1>
    </div>
  );
};

export default Clock;

const container = css`
  display: flex;
  margin: 20px 0;

  h1 {
    font-size: 6rem;
  }
`;
