import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { getFormTime } from 'utils/getFormTime';
import { getCurTime } from 'utils/getCurTime';
import { COLOR_STYLES } from 'styles';

const Clock = () => {
  const [curTime, setCurTime] = useState({ hour: 0, minutes: 0, seconds: 0 });
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
