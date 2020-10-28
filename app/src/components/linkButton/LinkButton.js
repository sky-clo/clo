import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({
  children,
  className,
  href,
  to,
  primary,
  ...props
}) {
  const toolkitClass =
    primary === false ? "c-btn--secondary" : "c-btn--primary";

  return (
    <Link
      to={href ?? to}
      className={`c-btn ${toolkitClass} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
