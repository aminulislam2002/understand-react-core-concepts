import React from "react";

const Knob = (props) => {
  return (
    <div style={{ border: "2px solid blue", margin: "10px" }}>
      <h3>This is Knob component</h3>
      <h1>Steps Count: {props.steps}</h1>
    </div>
  );
};

export default Knob;
