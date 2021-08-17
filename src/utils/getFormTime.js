export const getFormTime = (curTime) => {
  const { hour, minutes, seconds } = curTime;

  return `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};
