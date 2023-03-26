import React, { useEffect, useState } from "react";
import Dial from "../Dial/Dial";

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    setSteps = setSteps(steps + 1);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <h3>This is Watch component</h3>
      <h1>This is my SMART watch!</h1>
      <p>Steps: {steps}</p>
      <button onClick={increaseSteps}>De dour...</button>
      <Dial steps={steps}></Dial>
    </div>
  );
};

export default Watch;
