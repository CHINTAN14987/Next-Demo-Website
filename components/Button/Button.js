import React, { useEffect, useState } from "react";

const Button = (props) => {
  const [buttonAttributes, setButtonAttributes] = useState({
    content: "Know More",
    style: {
      color: "white",
      borderRadius: "20px",
      fontWeight: "700",
      background: "#EB596E",
      border: "none",
      padding: "10px 30px",
      fontSize: "18px",
      fontFamily: "Montserrat",
      letterSpacing: "1px",
    },
  });

  useEffect(() => {
    if (
      props?.buttonAttributes &&
      Object.keys(props?.buttonAttributes)?.length
    ) {
      setButtonAttributes({
        ...buttonAttributes,
        content: props?.buttonAttributes?.content,
        style: {
          ...buttonAttributes?.style,
          ...props?.buttonAttributes?.style,
        },
        event: props?.event ? props?.event : () => {},
      });
    }
  }, []);

  return (
    <button
      style={buttonAttributes?.style}
      onClick={(e) => {
        buttonAttributes?.event && buttonAttributes?.event(e);
      }}
    >
      {buttonAttributes?.content}
    </button>
  );
};

export default Button;
