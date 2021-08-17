import { DATE_STR } from "config";

export const getFormDateKR = (curDate) => {
  const { year, month, date, day } = curDate;

  return `${year}년 ${month}월 ${date}일 ${DATE_STR.daysKR[day]}`;
};
