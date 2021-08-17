import React, { useEffect, useState } from "react";
import { getFormTime } from "utils/getFormTime";
import { getCurTime } from "utils/getCurTime";

const Clock = () => {
  const [curTime, setCurTime] = useState({ hour: 0, minutes: 0, seconds: 0 });
  const [formatedTime, setFormatedTime] = useState(null);

  useEffect(() => {
    setFormatedTime(getFormTime(curTime));

    const timer = setInterval(() => {
      setCurTime(getCurTime());
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
