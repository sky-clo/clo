import React from "react";

export default function Button(props) {
  const toolkitClass =
    props.primary === false ? "c-btn--secondary" : "c-btn--primary";
  const className = `c-btn ${toolkitClass} ${props.className}`;

  return (
    <button
      onClick={props.onClick}
      className={className}
      type={props.type}
      data-test={props.dataTest}
    >
      {props.children}
    </button>
  );
}
