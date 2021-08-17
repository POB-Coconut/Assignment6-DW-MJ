export const getNumsArray = (str) => {
  const arr = str.split(",").map((item) => +item);

  console.log(arr);
  return arr;
};
