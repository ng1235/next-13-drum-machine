"use client";
import React from "react";

import Header from "../components/Header";

import "./styles.css";

export const SoundEnabledContext = React.createContext();

function RootLayout({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(true);
  const value = {
    isSoundEnabled,
    setIsSoundEnabled,
  };
  return (
    <SoundEnabledContext.Provider value={value}>
      <html lang="en">
        <body>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </body>
      </html>
    </SoundEnabledContext.Provider>
  );
}

export default RootLayout;
