import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ColorProvider } from "./components/Providers/ColorProvider";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Toolbar/NavBar";
import { Box, Toolbar } from "@mui/material";

function App() {
  return (
    <ColorProvider>
      <NavBar />
      <Toolbar sx={{height:84}}/>
      <Box
        paddingLeft={15}
        paddingRight={15}
        paddingBottom={10}
        bgcolor={"background.default"}
      >
        <Outlet />
      </Box>
    </ColorProvider>
  );
}

export default App;
