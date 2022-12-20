import React from "react";
import "../styles/globals.css";

function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
