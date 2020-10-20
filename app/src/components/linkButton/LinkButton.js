import React from "react";

export default function LinkButton({
  children,
  className,
  href,
  primary,
  ...props
}) {
  const toolkitClass =
    primary === false ? "c-btn--secondary" : "c-btn--primary";

  return (
    <a href={href} className={`c-btn ${toolkitClass} ${className}`} {...props}>
      {children}
    </a>
  );
}
