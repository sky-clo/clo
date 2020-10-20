import React from "react";

export default function Button({
  children,
  className,
  onClick,
  primary,
  type,
  ...props
}) {
  const toolkitClass =
    primary === false ? "c-btn--secondary" : "c-btn--primary";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`c-btn ${toolkitClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
