export const inputValidate = (str) => {
  const reg = new RegExp(/^-?[0-9]+$/);
  const strArr = str.split(",");

  return strArr.every((v) => reg.test(v));
};
