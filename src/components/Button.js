import React from "react";

function Button(props) {
  return (
    <button
      className="big-button"
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      Roll
    </button>
  );
}

export default Button;
