export const inputValidate = (str) => {
  const reg = new RegExp(/^-?[0-9]+$/);
  const strArr = str.split(",");

  console.log(strArr.every((v) => reg.test(v)));
  return strArr.every((v) => reg.test(v));
};
