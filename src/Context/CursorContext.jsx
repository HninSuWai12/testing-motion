import React, { createContext, useState, useContext } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("first");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
