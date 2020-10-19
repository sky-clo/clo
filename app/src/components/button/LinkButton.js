import React from "react";

export default function LinkButton(props) {
  const toolkitClass =
    props.primary === false ? "c-btn--secondary" : "c-btn--primary";
  const className = `c-btn ${toolkitClass} ${props.className}`;

  return (
    <a href={props.href} className={className} data-test={props.dataTest}>
      {props.children}
    </a>
  );
}
