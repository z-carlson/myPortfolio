import "normalize.css";
import "./src/styles/global.css";
import { ThemeProvider } from "./src/context/ThemeContext";
import React from "react";

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>;
}
