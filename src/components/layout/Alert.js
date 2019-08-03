import React from "react";

export default function Alert({ alert }) {
  return <div className={alert.style}>{alert.text}</div>;
}
