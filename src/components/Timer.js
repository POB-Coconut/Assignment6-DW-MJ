import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { COLOR_STYLES } from 'styles';

const Timer = ({ isKR }) => {
  const curDate = getCurDate();
  const formatedDate = isKR ? formatDateKR(curDate) : formatDateUS(curDate);

  return (
    <div css={container}>
      <h2>{formatedDate}</h2>
    </div>
  );
};

export default Timer;

// prettier-ignore
const dateStr = {
  daysKR: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  daysEN: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  MonthsEN: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

const getCurDate = () => {
  const curDate = new Date();
  const year = curDate.getFullYear();
  const month = curDate.getMonth();
  const date = curDate.getDate();
  const day = curDate.getDay();

  return { year, month, date, day };
};

const formatDateKR = (curDate) => {
  const { year, month, date, day } = curDate;

  return `${year}년 ${month}월 ${date}일 ${dateStr.daysKR[day]}`;
};

const formatDateUS = (curDate) => {
  const { year, month, date, day } = curDate;

  return `${dateStr.daysEN[day]}, ${dateStr.MonthsEN[month]} ${date}, ${year}`;
};

const container = css`
  h2 {
    font-size: 2rem;
  }
`;
