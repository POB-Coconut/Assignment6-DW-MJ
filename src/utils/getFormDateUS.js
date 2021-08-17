import { DATE_STR } from "config";

export const getFormDateUS = (curDate) => {
  const { year, month, date, day } = curDate;

  return `${DATE_STR.daysEN[day]}, ${DATE_STR.MonthsEN[month]} ${date}, ${year}`;
};
