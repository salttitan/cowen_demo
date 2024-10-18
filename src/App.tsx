import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ColorProvider } from "./components/Providers/ColorProvider";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Toolbar/NavBar";

function App() {
  return (
    <ColorProvider>
      <NavBar />
      <Outlet />
    </ColorProvider>
  );
}

export default App;
