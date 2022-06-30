import React from "react";

export default function ({ link, children, bold }) {
  return (
    <a href={link} style={{fontWeight: bold?700:400}} target="_blank" rel="nofollow noreferrer">
      {children}
    </a>
  );
}
