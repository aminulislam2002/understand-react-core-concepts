import React from "react";

const DeviceDetails = (props) => {
  return (
    <div>
      <h1>Information about my device details.</h1>
      <h3>Mobile: {props.name}</h3>
      <h4>Model: {props.model}</h4>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default DeviceDetails;
