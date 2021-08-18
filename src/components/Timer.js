import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getFormDateKR, getFormDateUS, getCurDate } from 'utils';

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
  margin-bottom: 5px;
  h2 {
    font-size: 2rem;
  }
`;
