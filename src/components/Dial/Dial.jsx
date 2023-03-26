import React from "react";
import Knob from "../Knob/Knob";

const Dial = (props) => {
  return (
    <div style={{ border: "2px solid aqua", margin: "10px" }}>
      <h3>This is Dial component</h3>
      <h1>Your steps count {props.steps}</h1>
      <Knob steps={props.steps}></Knob>
    </div>
  );
};

export default Dial;
