import React from "react";

export default function Button(props) {
  const toolkitClass =
    props.primary === false ? "c-btn--secondary" : "c-btn--primary";
  const className = `c-btn ${toolkitClass} ${props.className}`;

  return (
    <button onClick={props.onClick} className={className} type={props.type}>
      {props.children}
    </button>
  );
}
