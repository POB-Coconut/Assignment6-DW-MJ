export const getNumsArray = (str) => {
  const arr = str.split(',').map((item) => +item);

  return arr;
};
