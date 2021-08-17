import React from "react";
import { Timer, Clock } from "components";

const Home = () => {
  return (
    <div>
      <Timer isKR={true} />
      <Timer isKR={false} />
      <Clock />
    </div>
  );
};

export default Home;
