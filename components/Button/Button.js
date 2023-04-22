import React from "react";

const Button = (props) => {
  const { attributes } = props;
  return <button style={attributes.style}>{attributes.content}</button>;
};

export default Button;
