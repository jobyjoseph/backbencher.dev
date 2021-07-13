import React from "react";

export default function ({ link, children }) {
  return (
    <a href={link} target="_blank" rel="nofollow noreferrer">
      {children}
    </a>
  );
}
