export const getCurDate = () => {
  const curDate = new Date();
  const year = curDate.getFullYear();
  const month = curDate.getMonth();
  const date = curDate.getDate();
  const day = curDate.getDay();

  return { year, month, date, day };
};
