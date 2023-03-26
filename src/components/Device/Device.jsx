import React from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const Device = (props) => {
  return (
    <div style={{ border: "2px solid green", margin: "10px" }}>
      <h3>This is Device component</h3>
      <h1>I have a device: {props.name}</h1>
      <DeviceDetails name={props.name} price={props.price} model={props.model}></DeviceDetails>
    </div>
  );
};

export default Device;
