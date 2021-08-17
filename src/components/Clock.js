import React, { useEffect, useState } from "react";

const Clock = () => {
  const [curTime, setCurTime] = useState(getTime());
  const formatedTime = formTime(curTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurTime(getTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [curTime]);

  return (
    <div>
      <p>{formatedTime}</p>
    </div>
  );
};

export default Clock;

const getTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return { time, hour, minutes, seconds };
};

const formTime = (curTime) => {
  const { hour, minutes, seconds } = curTime;

  return `${hour}:${minutes}:${seconds}`;
};
